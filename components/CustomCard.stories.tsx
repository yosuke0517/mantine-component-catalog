import { CustomCard } from './CustomCard'
import { ComponentMeta } from '@storybook/react'

export default {
  title: 'CustomCard',
  component: CustomCard,
  argTypes: {
    // propsに渡すvariantをStorybookから変更できるように追加
    type: {
      // ラジオボタンで設定できるように指定
      control: { type: 'radio' },
    },
  },
  parameters: {
    docs: {
      // このコンポーネントに関しては触った方がわかりやすそうなので不要
      // page: MDXDocument,
    },
  },
} as ComponentMeta<typeof CustomCard>

export const CustomCardDemo = () => {
  return (
    <CustomCard
      title="簡単なお仕事です"
      content="空港にいる男性から荷物を受け取る簡単なお仕事です"
      status="New"
      postUrl="/images/developer.png"
    />
  )
}
