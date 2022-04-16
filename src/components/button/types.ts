import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

export type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ColorVariation = 'white' | 'darkGrey' | 'grey'

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'third'
  colorVariation?: ColorVariation
  fullWidth?: boolean
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes

export type IconProps = Pick<ButtonProps, 'iconPosition'>

export type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'fullWidth' | 'variant' | 'colorVariation'>
