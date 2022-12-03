import { NextPage } from 'next'
import { Center, Group, Loader } from '@mantine/core'
import { DraggableY } from '../components/DraggableY'
import { Todo } from '../types'
import { useQueryTodos } from '../hooks/useQueryTodos'
import { Layout } from '../components/Layout'

export const DraggableDemo: NextPage = ({}) => {
  const { data, status } = useQueryTodos()

  const changeItem = (item: Todo[]) => {
    // TODO update priority
    console.log('onChange')
    console.log(item)
  }
  return (
    <Layout title="draggable" bg="bg-gray-200">
      {status === 'loading' && (
        <Center>
          <Loader color="indigo" size="md" variant="bars" />
        </Center>
      )}
      <Group>
        {data && (
          <DraggableY
            initialItems={data}
            onChange={(newList) => changeItem(newList)}
          />
        )}
      </Group>
    </Layout>
  )
}

export default DraggableDemo
