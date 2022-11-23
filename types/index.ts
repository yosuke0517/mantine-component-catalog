export type IForm = {
  email: string
  password: string
  age: number // いらないけどサンプルなので数値も入れておく
}

export type Todo = {
  id: number
  created_at: string
  title: string
}

export type AuthForm = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  termsOfService: boolean
}
