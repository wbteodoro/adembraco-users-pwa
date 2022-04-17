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

export const ReservationsIcon = styled(CalendarToday)``
export const SubscriptionIcon = styled(PermContactCalendar)``
export const HistoryIcon = styled(History)``
export const UserIcon = styled(ManageAccounts)``
export const LogoutIcon = styled(Logout)``
