import { ChangeEvent, useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'
import { Layout } from '../components/Layout'
import { Mavatar } from '../components/Avatar'
import { Center, Group, LoadingOverlay } from '@mantine/core'
import { uploadAvatarImage } from '../utils/uploadImage'

const AvatarDemo = () => {
  const [avatarUrl, setAvatarUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    // profileからアバターのURLを取得しURLがなければ
    const getProfile = async () => {
      const { data, error, status } = await supabase
        .from('profiles')
        .select('avatar_url')
        .eq('id', supabase.auth.user()?.id)
        .single()
      if (error && status !== 406) {
        throw new Error(error.message)
      }
      if (data) {
        setAvatarUrl(data.avatar_url)
      }
    }
    getProfile()
  }, [])

  const uploadAvatarImageCallback = async (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setIsLoading(true)
    const result = await uploadAvatarImage(e)
    if (result) setAvatarUrl(result)
    setIsLoading(false)
  }

  return (
    <Layout title="Profile">
      <Group position="center" direction="column">
        <LoadingOverlay visible={isLoading} />
        <p>アバター写真をPOST出来ます</p>
        <Mavatar
          url={`${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}/avatars/${avatarUrl}`}
          uploadCallback={(e) => uploadAvatarImageCallback(e)}
        />
      </Group>
    </Layout>
  )
}

export default AvatarDemo
