import React, { ChangeEvent, forwardRef, useCallback } from 'react'
import { Error } from 'styled-icons/material'
import { GenericFieldType, GenericOptionType } from '@/types/fields'
import * as S from './styles'

export type SelectProps = {
  label?: string
  options: GenericOptionType[]
  infoLink?: {
    label: string
    link: string
  }
} & GenericFieldType<string, HTMLSelectElement>

export type InfoProps = {
  hasError: boolean
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, infoLink, error, value, onBlur, onChange }, ref) => {
    const optionList = [{ value: '', label: '' }, ...options]
    const handleChange = useCallback(
      (event: ChangeEvent<HTMLSelectElement>) => {
        !!onChange && onChange(event.target.value)
      },
      [onChange]
    )

    return (
      <S.Info hasError={!!error}>
        <S.Label>{label}</S.Label>
        <S.InputGroup>
          <S.Field
            value={value}
            ref={ref}
            onBlur={onBlur}
            onChange={handleChange}
          >
            {optionList.map(item => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </S.Field>
          {error && (
            <>
              <S.ErrorIcon>
                <Error />
              </S.ErrorIcon>
              <p>{error}</p>
            </>
          )}
        </S.InputGroup>
        {infoLink && (
          <S.Link>
            <S.Anchor target="_blank" rel="noreferrer" href={infoLink.link}>
              {infoLink.label}
            </S.Anchor>
          </S.Link>
        )}
      </S.Info>
    )
  }
)
Select.displayName = ' - Selecione uma opção - '

export default Select
