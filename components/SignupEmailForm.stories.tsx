import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MouseEventHandler, ReactNode } from 'react'
import { SignupEmailForm } from './SignupEmailForm'
// @ts-ignore
import MDXDocument from './SignupEmailForm.mdx'

export default {
  title: 'SignupEmailForm',
  component: SignupEmailForm,
  parameters: {
    docs: {
      // ドキュメント用のmdxコンポーネントを指定
      page: MDXDocument,
    },
  },
} as ComponentMeta<typeof SignupEmailForm>

// テンプレートコンポーネントを実装
// Storybookから渡されたpropsをそのままButtonに渡す
const Template: ComponentStory<typeof SignupEmailForm> = (args) => (
  <SignupEmailForm {...args} />
)

// bindを呼び出しStoryを作成
export const SignupEmailFormTemplate = Template.bind({})
