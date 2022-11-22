import { Loading, LoadingProps } from './Loading'
import { ComponentMeta } from '@storybook/react'

export default {
  title: 'Loading',
  component: Loading,
  argTypes: {
    // propsに渡すvariantをStorybookから変更できるように追加
    type: {
      // ラジオボタンで設定できるように指定
      control: { type: 'radio' },
    },
  },
  parameters: {
    docs: {
      // ドキュメント用のmdxコンポーネントを指定
      // page: MDXDocument,
    },
  },
} as ComponentMeta<typeof Loading>

export const LoadingStory = (props: LoadingProps) => {
  return (
    <Loading color={props.color} size={props.size} variant={props.variant} />
  )
}
