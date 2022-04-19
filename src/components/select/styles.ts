import styled, { css } from 'styled-components'
import { InfoProps } from '.'

export const ErrorIcon = styled.span`
  right: 0;
  top: 50%;
  display: flex;
  align-items: center;
  position: absolute;
  transform: translate(-50%, -50%);

  svg {
    font-size: ${({ theme }) => theme.font.sizes.xlarge};
    color: ${({ theme }) => theme.colors.error};
  }
`

export const ErrorField = css`
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.error};
`

export const Link = styled.div`
  text-align: right;
  margin-bottom: -20px;

  a {
    margin-right: 2px;
    font-weight: bold;
    font-size: 1rem;
    line-height: 2;
    text-align: right;
    text-decoration-line: underline;
  }
`

export const Info = styled.div<InfoProps>`
  flex-grow: 4;
  display: inline-block;
  align-items: stretch;
  width: 100%;

  select {
    width: 100%;
    height: 40px;
    padding: 6px;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.grey};
    box-sizing: border-box;
    border-radius: 8px;

    ${({ hasError }) => (hasError ? ErrorField : {})};
  }
`

export const InputGroup = styled.div`
  position: relative;

  select {
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  p {
    position: absolute;
    margin: 8px 2px;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.error};
  }
`
export const Field = styled.select``

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.darkGrey};
  line-height: 2;
  font-weight: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
`
export const Anchor = styled.a``
