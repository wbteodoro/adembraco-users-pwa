import React, { ChangeEvent, useCallback, useState } from 'react'
import { InputProps } from './types'
import * as S from './styles'

const Input = ({
  name,
  type = 'text',
  label,
  error,
  icon,
  onChange,
  value,
  border = true,
  ...props
}: InputProps) => {
  const [visibility, setVisibility] = useState(false)

  const handleVisibleInputPassword = () => {
    if (type === 'password') {
      setVisibility(prevState => !prevState)
    }
  }

  const renderIconByType = () => {
    if (error) return <S.IconError aria-label="icone de error" />
    switch (type) {
      case 'money':
        return <S.MoneySymbol aria-label="icone monetario">R$</S.MoneySymbol>
      case 'password':
        return visibility ? (
          <S.IconVisibilityOff aria-label="ocultar senha" />
        ) : (
          <S.IconVisibility aria-label="mostra senha" />
        )
      default:
        return null
    }
  }

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      !!onChange && onChange(event)
    },
    [onChange]
  )

  let _type = type
  if (type === 'password' && visibility) {
    _type = 'text'
  }

  return (
    <S.Wrapper error={error} border={border}>
      {!!label && (
        <S.LabelWrapper>
          <S.Label htmlFor={name}>{label}</S.Label>
          {props.required && <S.RequiredTag htmlFor={name}>*</S.RequiredTag>}
        </S.LabelWrapper>
      )}
      <S.InputWrapper>
        <S.Input
          aria-label={name}
          {...props}
          value={value}
          onChange={handleChange}
          name={name}
          type={_type}
          id={name}
        />
        <S.InputIcon onClick={handleVisibleInputPassword}>
          {icon ? icon : renderIconByType()}
        </S.InputIcon>
      </S.InputWrapper>

      {error && typeof error === 'string' && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default Input
