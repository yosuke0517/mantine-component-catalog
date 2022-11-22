import { FC } from 'react'
import { Center, Loader } from '@mantine/core'

export type LoadingProps = {
  color:
    | 'gray'
    | 'red'
    | 'pink'
    | 'grape'
    | 'indigo'
    | 'cyan'
    | 'teal'
    | 'green'
    | 'lime'
    | 'yellow'
    | 'orange'
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant: 'oval' | 'bars' | 'dots'
}

export const Loading: FC<LoadingProps> = ({ color, size, variant }) => {
  return (
    <Center>
      <Loader color={color} size={size} variant={variant} />
    </Center>
  )
}
