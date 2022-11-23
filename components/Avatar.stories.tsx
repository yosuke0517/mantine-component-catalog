import { Mavatar } from './Avatar'
import { ComponentMeta } from '@storybook/react'
import { Loading, LoadingProps } from './Loading'
import Link from 'next/link'

export default {
  title: 'Avatar',
  component: Mavatar,
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
} as ComponentMeta<typeof Mavatar>

export const AvatarDemo = () => {
  const callback = (url: string) => {
    alert(`cahngeUrl${url}`)
  }
  const avatarUrl = `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}/avatars/${process.env.NEXT_PUBLIC_SAMPLE_IMAGE_NAME}`
  return (
    <>
      <a
        href="https://mantine-component-catalog.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="text-indigo-300 underline">
          画像のアップロードはデモページにてログイン後ご確認ください
        </p>
      </a>
      <Mavatar url={avatarUrl} setAvatarUrlCallback={(url) => callback(url)} />
    </>
  )
}
