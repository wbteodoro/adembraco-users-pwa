import styled from 'styled-components'
import {
  Place,
  Schedule,
  RadioButtonChecked,
  RadioButtonUnchecked
} from '@styled-icons/material'

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
  gap: 8px;
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
`

export const Title = styled.h1``

export const BodyContent = styled.div`
  flex: 1;
  padding-top: 8px;
`

export const WrapperSchedule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 8px;
`

export const SchedulesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 8px;
`

export const ScheduleItem = styled.button<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  gap: 8px;
  padding: 8px 16px;
  background-color: ${({ theme, active }) =>
    theme.colors[active ? 'lightGreen' : 'green']};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.font.sizes.medium};
`

export const ScheduleTime = styled.span`
  display: inline-block;
`

export const SchedulePrice = styled.span`
  display: inline-block;
`

export const PlaceIcon = styled(Place).attrs(props => ({
  color: props.theme.colors.lightGreen,
  size: 20
}))``

export const ScheduleIcon = styled(Schedule).attrs(props => ({
  color: props.theme.colors.lightGreen,
  size: 20
}))``

export const CheckedIcon = styled(RadioButtonChecked).attrs(props => ({
  color: props.theme.colors.white,
  size: 20
}))`
  margin-right: 8px;
`

export const UncheckedIcon = styled(RadioButtonUnchecked).attrs(props => ({
  color: props.theme.colors.white,
  size: 20
}))`
  margin-right: 8px;
`

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.medium};
`
