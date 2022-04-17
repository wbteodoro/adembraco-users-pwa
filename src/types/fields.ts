import { FocusEventHandler } from 'react'

export interface GenericFieldType<V, T = HTMLInputElement> {
  onChange?: (value: V | null) => void
  onBlur?: FocusEventHandler<T>
  value?: V
  error?: string | boolean
}

export type GenericOptionType<T = string> = {
  value: T
  label: string
}
