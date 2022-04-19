import styled from 'styled-components'
import { ExpandLess, ExpandMore } from 'styled-icons/material'

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  transition: height 0.2s ease-in-out;
  border-radius: 8px;
`
export const CollapseHeader = styled.button<{ disabled: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 8px;
  gap: 8px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background: ${({ theme }) => theme.colors.lightGrey};
  width: 100%;
  border-radius: 8px;
`

export const CollapseContent = styled.div`
  overflow: hidden;
  display: flex;
`

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`

export const ExpandLessIcon = styled(ExpandLess).attrs(({ theme }) => ({
  color: theme.colors.orange,
  size: 24
}))``

export const ExpandMoreIcon = styled(ExpandMore).attrs(({ theme }) => ({
  color: theme.colors.darkGrey,
  size: 24
}))``
