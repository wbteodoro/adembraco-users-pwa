import styled from 'styled-components'

export const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  height: 140px;
  width: 140px;
  flex-grow: 1;
  min-width: 25%;

  padding: 8px;
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.effects.dropShadow.elev3};
`

export const MenuItem = styled.div``

export const MenuItemIcon = styled.span`
  color: ${({ theme }) => theme.colors.green};
  width: 60px;
  height: 60px;
`

export const MenuItemLabel = styled.span`
  color: ${({ theme }) => theme.colors.green};
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: ${({ theme }) => theme.font.medium};
`
