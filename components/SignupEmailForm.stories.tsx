import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MouseEventHandler, ReactNode } from 'react'
import { SignupEmailForm } from './SignupEmailForm'
// @ts-ignore
import MDXDocument from './SignupEmailForm.mdx'
import { UseFormReturnType } from '@mantine/form/lib/use-form'
import { IForm } from '../types'
import { supabase } from '../utils/supabase'

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

const signupCallback = async (form: UseFormReturnType<IForm>) => {
  const { error } = await supabase.auth.signUp({
    email: form.values.email,
    password: form.values.password,
  })
  return error
}
const signinCallback = async (form: UseFormReturnType<IForm>) => {
  const { error } = await supabase.auth.signIn({
    email: form.values.email,
    password: form.values.password,
  })
  return error
}
// テンプレートコンポーネントを実装
// Storybookから渡されたpropsをそのままButtonに渡す
const Template: ComponentStory<typeof SignupEmailForm> = (args) => (
  <SignupEmailForm
    {...args}
    signupCallback={signupCallback}
    signinCallback={signinCallback}
  />
)

// bindを呼び出しStoryを作成
export const SignupEmailFormTemplate = Template.bind({})
