import { ShieldCheckIcon } from '@heroicons/react/solid'
import { LogoutIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { ActionIcon, Button, Center, Group } from '@mantine/core'
import { supabase } from '../utils/supabase'
import { Layout } from './Layout'

export const DashBord = ({}) => {
  const router = useRouter()
  const signOut = () => {
    // TODO フラッシュメッセージにする
    supabase.auth
      .signOut()
      .then((r) => console.log(r))
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
      <Group>
        <Button color="gray" onClick={() => router.push('/button')}>
          Button Demo
        </Button>
        <Button color="red" onClick={() => router.push('/grid')}>
          Grid Demo
        </Button>
        <Button color="pink" onClick={() => router.push('/group')}>
          Group Demo
        </Button>
        <Button color="grape" onClick={() => router.push('/multi-select')}>
          MultiSelect Demo
        </Button>
        <Button color="violet" onClick={() => router.push('/fetch-api')}>
          FetchApi （Loading） Demo
        </Button>
        <Button color="indigo" onClick={() => router.push('/modal')}>
          Modal Demo
        </Button>
        <Button color="blue" onClick={() => router.push('/avatar')}>
          Avatar Demo
        </Button>
        <Button color="cyan" onClick={() => router.push('/card')}>
          Card Demo
        </Button>
        <Button color="teal" onClick={() => router.push('/match-rate')}>
          MatchRate Demo
        </Button>
        <Button color="green" onClick={() => router.push('/crypt')}>
          Crypt Demo
        </Button>
        <Button color="lime" onClick={() => router.push('/notification')}>
          Notification Demo
        </Button>
        <Button color="yellow" onClick={() => router.push('/hooks')}>
          Hooks Demo
        </Button>
      </Group>

      <Center>
        <ActionIcon my="md" size="lg" onClick={signOut}>
          <LogoutIcon />
        </ActionIcon>
      </Center>
    </Layout>
  )
}
