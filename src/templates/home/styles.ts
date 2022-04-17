import styled from 'styled-components'
import {
  CalendarToday,
  PermContactCalendar,
  History,
  ManageAccounts,
  Logout
} from '@styled-icons/material'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 16px;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: center;
`

export const Title = styled.h2`
  width: 100%;
  font-size: ${props => props.theme.font.sizes.small};
  line-height: 16px;
`

export const SubTitle = styled.h3`
  width: 100%;
  font-size: ${props => props.theme.font.sizes.xlarge};
  line-height: 24px;
  padding: 8px;
`

export const ReservationsIcon = styled(CalendarToday)``
export const SubscriptionIcon = styled(PermContactCalendar)``
export const HistoryIcon = styled(History)``
export const UserIcon = styled(ManageAccounts)``
export const LogoutIcon = styled(Logout)``
