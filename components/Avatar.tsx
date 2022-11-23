import { ChangeEvent, FC, ReactNode, useEffect, useRef, useState } from 'react'
import { Loading } from './Loading'
import { Group, Avatar, Center } from '@mantine/core'
import { CameraIcon, ReplyIcon } from '@heroicons/react/solid'
import { supabase } from '../utils/supabase'

type AvatarProps = {
  url: string
  setAvatarUrlCallback: (url: string) => void
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export const Mavatar: FC<AvatarProps> = ({
  url,
  setAvatarUrlCallback,
  size = 'xl',
}) => {
  const [isLoading, setIsLoading] = useState(false)
  // TODO たぶんこれは外から注入した方がいい（storybookとかテスト時に面倒）
  const uploadAvatarImg = async (e: ChangeEvent<HTMLInputElement>) => {
    // TODO これもstorybookのオリジナルの処理だし・・・
    if (!supabase.auth.user()?.id) {
      throw new Error('Please Login or SignUp')
      alert('ログインしてください（）')
      return
    }
    if (!e.target.files || e.target.files.length === 0) {
      throw new Error('Please select the image file')
    }
    const file = e.target.files[0]
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    setIsLoading(true)
    const { error } = await supabase.storage
      .from('avatars')
      .upload(fileName, file)
    if (error) throw new Error(error.message)
    await upsertProfile(fileName)
    setAvatarUrlCallback(fileName)
    setIsLoading(false)
  }
  // TODO たぶんこれは外から注入した方がいい
  const upsertProfile = async (url: string) => {
    setIsLoading(true)
    const { error } = await supabase.from('profiles').upsert(
      {
        id: supabase.auth.user()?.id,
        avatar_url: url,
      },
      {
        returning: 'minimal',
      }
    )
    if (error) throw new Error(error.message)
    setIsLoading(false)
  }
  return (
    <Center>
      <Group
        className="relative w-fit"
        spacing="xs"
        direction="column"
        position="center"
        my="0"
      >
        {isLoading && <Loading />}
        {url && <Avatar size={size} src={url} />}

        <label htmlFor="avatar" className="absolute -bottom-2 left-24">
          <CameraIcon className="my-0 h-7 w-7 cursor-pointer text-gray-500" />
        </label>
        <input
          className="hidden"
          type="file"
          id="avatar"
          accept="image/*"
          onChange={(e) => uploadAvatarImg(e)}
        />
      </Group>
    </Center>
  )
}
