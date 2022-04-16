import styled from 'styled-components'
import { Menu, Close } from '@styled-icons/material'

type SideMenuProps = {
  isOpen: boolean
}

const HEADER_HEIGHT = '80px'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const WrapperHeader = styled.div`
  top: 0;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${HEADER_HEIGHT};
  padding: 0 16px;
  box-shadow: ${({ theme }) => theme.effects.dropShadow.elev2};
`

export const MenuButton = styled.button``

export const Logo = styled.img`
  height: 56px;
  width: auto;
`

export const Avatar = styled.img`
  height: 56px;
  width: 56px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.grey};
`

export const CloseIcon = styled(Close).attrs(({ theme }) => ({
  color: theme.colors.green,
  size: 32
}))``

export const MenuIcon = styled(Menu).attrs(({ theme }) => ({
  color: theme.colors.green,
  size: 32
}))``

export const SideMenu = styled.div<SideMenuProps>`
  position: absolute;
  top: ${HEADER_HEIGHT};
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.green};
  z-index: 1;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
`
export const MenuItem = styled.div`
  padding: 16px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGreen};
  }
`
export const WrapperMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px;
`

export const MenuItemIcon = styled.div``

export const MenuLink = styled.a`
  text-decoration: none;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  font-weight: ${({ theme }) => theme.font.medium};
  line-height: 1.2;
`

export const TitleSidebar = styled.h2`
  width: 100%;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: ${({ theme }) => theme.font.bold};
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  padding: 8px 16px;
`
