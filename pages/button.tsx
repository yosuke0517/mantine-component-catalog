import { NextPage } from 'next'
import { Layout } from '../components/Layout'
import { Button, Group } from '@mantine/core'
import { FlowerOff, Flower } from 'tabler-icons-react'
import Link from 'next/link'
import { ReplyIcon } from '@heroicons/react/solid'

export const ButtonDemo: NextPage = ({}) => {
  return (
    <Layout title="Button">
      <Group position="center" direction="column">
        <Button
          classNames={{
            leftIcon: 'text-pink-500 h-6 w-6',
            rightIcon: 'text-orange-500 h-6 w-6',
          }}
          color="indigo"
          radius="xl"
          size="md"
          uppercase
          leftIcon={<FlowerOff />}
          rightIcon={<Flower />}
        >
          Button
        </Button>
        <Button mt={16}>Button2</Button>
        <Link href="/">
          <ReplyIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" />
        </Link>
      </Group>
    </Layout>
  )
}

export default ButtonDemo
