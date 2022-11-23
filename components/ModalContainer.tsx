import { FC, ReactNode, useState } from 'react'
import { Group, Modal, Paper } from '@mantine/core'
import { AttachableIconButton } from './AttachableIconButton'

export type ModalContainerProps = {
  opened: boolean
  callback?: () => void
  close: () => void
  closeCallback: () => void
  children: ReactNode
}

export const ModalContainer: FC<ModalContainerProps> = ({
  opened,
  close,
  callback,
  closeCallback,
  children,
}) => {
  return (
    <Modal
      title="モーダルタイトルが入ります"
      centered
      opened={opened}
      onClose={() => closeCallback()}
    >
      <Paper>
        {children}
        {callback ? (
          <Group position="center">
            <AttachableIconButton type="cancel" callback={closeCallback}>
              <span>Cancel</span>
            </AttachableIconButton>
            <AttachableIconButton type="main" callback={callback}>
              <span>Action</span>
            </AttachableIconButton>
          </Group>
        ) : (
          <></>
        )}
      </Paper>
    </Modal>
  )
}
