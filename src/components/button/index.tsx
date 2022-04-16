import React, { forwardRef } from 'react'
import { ButtonProps, WrapperProps } from './types'
import * as S from './styles'

const Button: React.ForwardRefRenderFunction<
  WrapperProps,
  ButtonProps
> = (
  {
    disabled = false,
    fullWidth = false,
    colorVariation = 'orange',
    variant = 'primary',
    iconPosition,
    icon,
    children,
    ...props
  },
  ref
) => (
  <S.Wrapper
    colorVariation={colorVariation}
    hasIcon={!!icon}
    variant={variant}
    disabled={disabled}
    ref={ref}
    fullWidth={fullWidth}
    {...props}
  >
    {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
    {children}
  </S.Wrapper>
)

export default forwardRef(Button)
