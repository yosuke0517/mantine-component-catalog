import { ChangeEvent, useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'
import { Layout } from '../components/Layout'
import { Mavatar } from '../components/Avatar'
import { Center, Group } from '@mantine/core'

const AvatarDemo = () => {
  const [avatarUrl, setAvatarUrl] = useState('')
  const changeAvatarUrl = (url: string) => {
    setAvatarUrl(url)
  }
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
  return (
    <Layout title="Profile">
      <Group position="center" direction="column">
        <p>アバター写真をPOST出来ます</p>
        <Mavatar
          url={`${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}/avatars/${avatarUrl}`}
          setAvatarUrlCallback={(url) => changeAvatarUrl(url)}
        />
      </Group>
    </Layout>
  )
}

export default AvatarDemo
