import { NextPage } from 'next'
import { Group } from '@mantine/core'
import { DraggableY } from '../components/DraggableY'
import { Todo } from '../types'
import { useQueryTodos } from '../hooks/useQueryTodos'
import { Layout } from '../components/Layout'

export const DraggableDemo: NextPage = ({}) => {
  const { data } = useQueryTodos()

  const changeItem = (item: Todo[]) => {
    // TODO update priority
    console.log('onChange')
    console.log(item)
  }
  return (
    <Layout title="draggable" bg="bg-gray-200">
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
