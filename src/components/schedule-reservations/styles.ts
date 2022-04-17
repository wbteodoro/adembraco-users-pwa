import styled from 'styled-components'
import { Place, Schedule } from '@styled-icons/material'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  width: 100%;
  height: 100%;
  gap: 8px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
`

export const WrapperCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-auto-rows: auto;
  gap: 8px;
  padding: 16px 0;
`

export const WrapperSelectPlace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding-top: 8px;
`

export const Title = styled.h1``

export const PlaceIcon = styled(Place).attrs(props => ({
  color: props.theme.colors.lightGreen,
  size: 20
}))``
export const ScheduleIcon = styled(Schedule).attrs(props => ({
  color: props.theme.colors.lightGreen,
  size: 20
}))``

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.medium};
`
