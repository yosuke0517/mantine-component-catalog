import React, { FC, MouseEventHandler, ReactNode } from 'react'
import { Flower, FlowerOff } from 'tabler-icons-react'
import { Button } from '@mantine/core'

type ActionButtonProps = {
  type: ButtonType
  callback?: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}

type ButtonType = 'main' | 'sub'

export const BUTTON_TYPES = {
  Main: 'main',
  Sub: 'sub',
} as const

export type ButtonTypeKeys = keyof typeof BUTTON_TYPES
export type ButtonTypeValues = typeof BUTTON_TYPES[ButtonTypeKeys]

export const MAPPED_BUTTON_TYPES_LABEL: {
  [key in ButtonTypeValues]: string
} = {
  [BUTTON_TYPES.Main]: 'orange',
  [BUTTON_TYPES.Sub]: 'indigo',
}

/** ButtonTypeに応じたcolorを返します */
const buttonTypeComputed = (type: ButtonType): string => {
  return MAPPED_BUTTON_TYPES_LABEL[type]
}

export const ActionButton: FC<ActionButtonProps> = ({
  type,
  children,
  callback,
}) => {
  return (
    <Button
      classNames={{
        leftIcon: 'text-pink-500 h-6 w-6',
        rightIcon: 'text-orange-500 h-6 w-6',
      }}
      color={buttonTypeComputed(type)}
      radius="xl"
      size="md"
      uppercase
      leftIcon={<FlowerOff />}
      rightIcon={<Flower />}
      onClick={callback}
    >
      {children}
    </Button>
  )
}
