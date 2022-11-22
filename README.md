# mantine-component-catalog

作成日：2022/11/15
更新日：2022/11/19

### Webアプリにてよくあるコンポーネントをmantineで作ったやつ
※余裕があったら素のreactで作ってみて比較したい（きっつ）

### storybookをデプロイして誰でも見れるようにしてみた
https://storybook-for-mantine-component-catalog-pfzo.vercel.app/

### コンポーネントの命名
- 1コンポーネントにつき下記３ファイルが存在する。
  - コンポーネント名.tsx
  - コンポーネント名.stories.tsx
  - コンポーネント名.mdx
- コンポーネント名でディレクトリ切ってindex.tsxにしようと考えたが、全てのファイルがindex.tsxになってファイル名で何かしたいとき（何それ）に困りそうだなぁと思いやめた。

### storybookのデプロイ
- 開発者以外も見られるようにしたい要望を想定し、vercelへデプロイしている
- vercelの設定
  - Framework Preset: `Other`
  - Build Command: `yarn build-storybook`
  - Output Directory: `storybook-static`
  ![img.png](img.png)