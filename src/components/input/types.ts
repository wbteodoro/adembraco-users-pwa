import {
  InputHTMLAttributes,
  ReactNode,
  FocusEventHandler,
  ChangeEvent
} from 'react'

export interface GenericFieldType<V, T = HTMLInputElement> {
  onBlur?: FocusEventHandler<T>
  value?: V
  error?: string | boolean
}

export type GenericOptionType<T = string> = {
  value: T
  label: string
}

export type InputType =
  | 'text'
  | 'password'
  | 'number'
  | 'email'
  | 'money'
  | 'date'

type CustomInputProps = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  name: string
  mask?: string
  label?: string
  type?: InputType
  icon?: ReactNode
  border?: boolean
} & GenericFieldType<string>

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  keyof CustomInputProps
>

export type InputProps = CustomInputProps & HTMLInputProps

export type WrapperProps = Pick<InputProps, 'error' | 'border'>

export type ButtonProps = WrapperProps
