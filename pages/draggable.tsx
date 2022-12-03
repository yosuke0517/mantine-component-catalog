import { NextPage } from 'next'
import { Group } from '@mantine/core'
import { Draggable } from '../components/Draggable'
import { useEffect, useState } from 'react'
import { Todo } from '../types'
import { useQueryTodos } from '../hooks/useQueryTodos'
import { supabase } from '../utils/supabase'
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
          <Draggable
            initialItems={data}
            onChange={(newList) => changeItem(newList)}
          />
        )}
      </Group>
    </Layout>
  )
}

export default DraggableDemo
