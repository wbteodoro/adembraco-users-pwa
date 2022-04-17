import styled from 'styled-components'
import {
  Menu,
  Close,
  CalendarToday,
  PermContactCalendar,
  History,
  ManageAccounts,
  Logout
} from '@styled-icons/material'

type SideMenuProps = {
  isOpen: boolean
}

const HEADER_HEIGHT = '72px'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const WrapperHeader = styled.header`
  position: fixed;
  z-index: 1000;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${HEADER_HEIGHT};
  padding: 0 16px;
  box-shadow: ${({ theme }) => theme.effects.dropShadow.elev2};
  background-color: ${({ theme }) => theme.colors.white};
`

export const MenuButton = styled.button``

export const Logo = styled.img`
  height: 48px;
  width: auto;
`

export const Avatar = styled.img`
  height: 48px;
  width: 48px;
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
  position: fixed;
  top: ${HEADER_HEIGHT};
  width: 100%;
  height: calc(100% - ${HEADER_HEIGHT});
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
  line-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TitleSidebar = styled.h2`
  width: 100%;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: ${({ theme }) => theme.font.bold};
  line-height: 30px;
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  padding: 8px 16px;
`

export const ReservationsIcon = styled(CalendarToday).attrs({
  color: 'white',
  size: 24
})`
  margin-right: 8px;
  font-weight: ${({ theme }) => theme.font.medium};
`

export const SubscriptionIcon = styled(PermContactCalendar).attrs({
  color: 'white',
  size: 24
})`
  margin-right: 8px;
  font-weight: ${({ theme }) => theme.font.medium};
`
export const HistoryIcon = styled(History).attrs({
  color: 'white',
  size: 24
})`
  margin-right: 8px;
  font-weight: ${({ theme }) => theme.font.medium};
`
export const UserIcon = styled(ManageAccounts).attrs({
  color: 'white',
  size: 24
})`
  margin-right: 8px;
  font-weight: ${({ theme }) => theme.font.medium};
`
export const LogoutIcon = styled(Logout).attrs({
  color: 'white',
  size: 24
})`
  margin-right: 8px;
  font-weight: ${({ theme }) => theme.font.medium};
`
