import { ShieldCheckIcon } from '@heroicons/react/solid'
import { LogoutIcon } from '@heroicons/react/outline'
import { ActionIcon, Center, Menu } from '@mantine/core'
import { supabase } from '../utils/supabase'
import { Layout } from '../components/Layout'
import { Settings } from 'tabler-icons-react'
import { NextLink } from '@mantine/next'

export const DashBord = ({}) => {
  const signOut = () => {
    // TODO フラッシュメッセージにする
    supabase.auth
      .signOut()
      .then((r) => console.log('ログアウトしました。'))
      .catch((e) => {
        console.log('ログアウト失敗')
        console.error(e)
      })
  }
  return (
    <Layout title="DashBoard">
      <Center>
        <ShieldCheckIcon className="mb-4 h-14 w-14 text-teal-500" />
      </Center>
      <Center>
        <Menu trigger="hover" size="xl">
          <Menu.Label>UI Components</Menu.Label>
          <Menu.Item component="a" href="/button" icon={<Settings size={16} />}>
            Button
          </Menu.Item>
          <Menu.Item component="a" href="/grid" icon={<Settings size={16} />}>
            Grid
          </Menu.Item>
          <Menu.Item component="a" href="/group" icon={<Settings size={16} />}>
            Group
          </Menu.Item>
          <Menu.Item
            component="a"
            href="/multi-select"
            icon={<Settings size={16} />}
          >
            MultiSelect
          </Menu.Item>
        </Menu>
      </Center>

      <Center>
        <ActionIcon my="md" size="lg" onClick={signOut}>
          <LogoutIcon />
        </ActionIcon>
      </Center>
    </Layout>
  )
}
