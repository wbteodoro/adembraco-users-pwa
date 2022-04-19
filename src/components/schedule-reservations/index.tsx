import { Fragment, useCallback, useState } from 'react'
import Collapse from '@/components/collapse'
import Select from '@/components/select'
import Input from '@/components/input'
import CardOptionsPlaces from '@/components/card-options-places'
import useService from '@/contexts/services'
import { PlaceOptionsData } from '@/types'
import { currencyFormatter } from '@/utils/helpers'
import * as S from './styles'

export type PlacesOptionsProps = {
  onChooseCard: (placeOptions: PlaceOptionsData) => void
  placeOptions: PlaceOptionsData[]
}

const PlacesOptions = ({ onChooseCard, placeOptions }: PlacesOptionsProps) => {
  const { selectedPlaceId } = useService()
  const handleChooseCard = (option: PlaceOptionsData) => {
    !!onChooseCard && onChooseCard(option)
  }

  return (
    <S.WrapperCards>
      {placeOptions.map(option => (
        <Fragment key={option.placeId}>
          <CardOptionsPlaces
            isActive={selectedPlaceId === option.placeId}
            placeOption={option}
            onChooseCard={handleChooseCard}
          />
        </Fragment>
      ))}
    </S.WrapperCards>
  )
}

const ContentFirstCollapse = ({ onChoosePlaceCardOption }) => {
  const {
    placesOptionsByGroup,
    placesGroupsOptions,
    choosePlaceGroup,
    choosePlaceCardOption
  } = useService()

  const handleChooseCard = useCallback(
    (option: PlaceOptionsData) => {
      choosePlaceCardOption(option)
      !!onChoosePlaceCardOption && onChoosePlaceCardOption()
    },
    [choosePlaceCardOption, onChoosePlaceCardOption]
  )

  return (
    <S.WrapperSelectPlace>
      <Select
        defaultLabel="Selecione o espaço desejado"
        options={placesGroupsOptions}
        onChange={choosePlaceGroup}
        label="Selecionar tipo de espaço"
      />
      <PlacesOptions
        placeOptions={placesOptionsByGroup}
        onChooseCard={handleChooseCard}
      />
    </S.WrapperSelectPlace>
  )
}

const ContentSecondCollapse = () => {
  const {
    schedulesByDate,
    getSchedulesByDate,
    setSelectedSchedule,
    selectedSchedule
  } = useService()

  const handleAddOrRemoveSchedule = useCallback(
    ({ id, isActive }) => {
      setSelectedSchedule(prevState =>
        !isActive
          ? [...prevState, id]
          : prevState.filter(scheduleId => scheduleId !== id)
      )
    },
    [setSelectedSchedule]
  )

  return (
    <S.WrapperSchedule>
      <Input
        min="2022-04-17"
        max="2022-04-24"
        name="schedule-place"
        type="date"
        onChange={getSchedulesByDate}
        label="Data da reserva"
        defaultValue={new Date().toISOString().split('T')[0]}
      />
      <S.SchedulesList>
        {schedulesByDate.map(schedule => {
          const activeSchedule = selectedSchedule.includes(schedule.scheduleId)
          return (
            <S.ScheduleItem
              onClick={() =>
                handleAddOrRemoveSchedule({
                  id: schedule.scheduleId,
                  isActive: activeSchedule
                })
              }
              key={Math.random()}
              active={activeSchedule}
            >
              <S.ScheduleTime>
                {activeSchedule ? <S.CheckedIcon /> : <S.UncheckedIcon />}
                Horário livre
              </S.ScheduleTime>
              <S.ScheduleTime>
                {schedule.startTime + ' - ' + schedule.endTime}
              </S.ScheduleTime>
              <S.SchedulePrice>
                {currencyFormatter({ value: schedule.price })}
              </S.SchedulePrice>
            </S.ScheduleItem>
          )
        })}
      </S.SchedulesList>
    </S.WrapperSchedule>
  )
}

const collapseSettings = (onChoosePlaceCardOption: () => void) => [
  {
    icon: <S.PlaceIcon />,
    heading: 'Selecionar Espaços',
    children: (
      <ContentFirstCollapse onChoosePlaceCardOption={onChoosePlaceCardOption} />
    )
  },
  {
    icon: <S.ScheduleIcon />,
    heading: 'Selecionar Horários',
    children: <ContentSecondCollapse />
  }
]

const ScheduleReservations = () => {
  const { selectedPlaceId } = useService()

  const [activeCollapse, setActiveCollapse] = useState(0)

  const onChoosePlaceCardOption = useCallback(() => {
    setActiveCollapse(prevState => prevState + 1)
  }, [])

  return (
    <S.Wrapper>
      <S.Title>Escolha seu espaço</S.Title>
      <S.Content>
        {collapseSettings(onChoosePlaceCardOption).map((item, index) => (
          <Fragment key={index}>
            <Collapse
              icon={item.icon}
              heading={<S.Heading>{index + 1 + '. ' + item.heading}</S.Heading>}
              isOpen={activeCollapse === index}
              setOpen={setActiveCollapse}
              order={index}
              disabled={!selectedPlaceId && index === 1}
            >
              <S.BodyContent>{item.children}</S.BodyContent>
            </Collapse>
          </Fragment>
        ))}
      </S.Content>
    </S.Wrapper>
  )
}

export default ScheduleReservations
