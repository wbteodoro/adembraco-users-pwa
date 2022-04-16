import styled, { css } from 'styled-components'
import { IconProps, WrapperProps } from './types'

const modifiers = {
  fullWidth: () => css`
    width: 100%;
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      opacity: 0.3;
    }
  `,
  primary: ({ theme, colorVariation }) => css`
    background-color: ${theme.colors[colorVariation]};
    color: ${theme.colors.white};
    border: 0;
    padding: 16px;
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.large};
  `,
  secondary: ({ theme, colorVariation }) => css`
    background-color: transparent;
    border: 0;
    color: ${theme.colors[colorVariation]};
    padding: 8px;
    font-weight: ${theme.font.bold};
    line-height: 24px;
    font-size: ${theme.font.sizes.medium};
  `,
  withIcon: () => css`
    svg {
      & + span {
        margin-left: 4px;
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: auto;
  border-radius: 8px;
  text-decoration: none;
  text-transform: uppercase;

  ${({ theme, fullWidth, disabled, variant, colorVariation, hasIcon }) => css`
    ${fullWidth && modifiers.fullWidth()};
    ${disabled && modifiers.disabled()};
    ${!!hasIcon && modifiers.withIcon()};
    ${!!variant &&
    !!colorVariation &&
    modifiers[variant]({ theme, colorVariation })};
  `};
`

export const Icon = styled.div<IconProps>`
  display: flex;
  order: ${({ iconPosition }) => (iconPosition === 'right' ? 1 : 0)};
`
