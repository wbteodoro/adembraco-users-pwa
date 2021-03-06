import styled, { css } from 'styled-components'
import {
  ArrowDropDown,
  Error as MdError,
  Event,
  Visibility,
  VisibilityOff
} from '@styled-icons/material'
import { WrapperProps, ButtonProps } from './types'

const borderWithColor = (color: string, border?: boolean) => css`
  border: ${border ? `1px solid ${color}` : 'none'};
`

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  position: relative;

  input {
    width: 100%;
    height: 32px;
    padding: 8px;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.darkGrey};

    ${({ theme, error, border }) =>
      borderWithColor(error ? theme.colors.error : theme.colors.grey, border)}

    &:disabled {
      background-color: ${({ theme }) => theme.colors.grey};
      opacity: 50%;
    }

    &:focus-within {
      ${({ theme, border }) => borderWithColor(theme.colors.orange, border)}
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.grey};
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      color: ${({ theme }) => theme.colors.darkGrey} !important;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    [type='number'] {
      -moz-appearance: textfield;
    }
  }
`

export const LabelWrapper = styled.div`
  display: inline-flex;
  margin-bottom: 4px;
`

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: ${({ theme }) => theme.font.medium};
`

export const RequiredTag = styled.label`
  margin-left: 4px;
  color: ${({ theme }) => theme.colors.orange};
`

export const Error = styled.span`
  margin-top: 8px;
  line-height: 16px;
  font-size: ${({ theme }) => theme.font.sizes.small};
  color: ${({ theme }) => theme.colors.error};
`

export const Input = styled.input``

export const IconEvent = styled(Event).attrs({
  size: 24
})``

export const IconError = styled(MdError).attrs({
  size: 24
})`
  color: ${({ theme }) => theme.colors.error};
`
const PasswordIcon = css`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grey};
`

export const IconVisibility = styled(Visibility).attrs({
  size: 24
})`
  ${PasswordIcon}
`
export const IconVisibilityOff = styled(VisibilityOff).attrs({
  size: 24
})`
  ${PasswordIcon}
`

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
`
export const InputIcon = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px;
  height: 100%;
  display: flex;
  align-items: center;
`

export const MoneySymbol = styled.span`
  color: ${({ theme }) => theme.colors.grey};
`

export const InputTypeColor = styled.input.attrs({
  hidden: true
})``

export const Button = styled.button<ButtonProps>`
  border-radius: 8px;
  padding: 8px;
  background: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme, error, border }) => `
    ${borderWithColor(error ? theme.colors.error : theme.colors.grey, border)};
    color: ${error ? theme.colors.error : theme.colors.darkGrey};
  `}
`

export const IconArrowDropDown = styled(ArrowDropDown).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.grey
}))``
