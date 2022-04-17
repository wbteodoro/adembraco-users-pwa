import styled from 'styled-components'
import { ExpandLess, ExpandMore } from 'styled-icons/material'

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  transition: max-height 0.2s ease-in-out;
`
export const CollapseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 8px;
  gap: 8px;
  cursor: pointer;
`

export const CollapseContent = styled.div`
  overflow: hidden;
  display: flex;
`

export const HeadingWrapper = styled.div`
  display: flex;
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
