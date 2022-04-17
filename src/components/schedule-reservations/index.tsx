import { Fragment, useState } from 'react'
import Collapse from '@/components/collapse'
import Select from '@/components/select'
import CardOptionsPlaces, {
  PlaceOptionsData
} from '@/components/card-options-places'
import { GenericOptionType } from '@/types/fields'
import * as S from './styles'

export type PlacesOptionsProps = {
  onChooseCard: (placeOptions: PlaceOptionsData) => void
  placeOptions: PlaceOptionsData[]
}

export type ScheduleReservationsProps = {
  placeOptions: PlaceOptionsData[]
  placesGroupsOptions: GenericOptionType[]
}

const PlacesOptions = ({ onChooseCard, placeOptions }: PlacesOptionsProps) => {
  const handleChooseCard = (option: PlaceOptionsData) => {
    !!onChooseCard && onChooseCard(option)
  }

  return (
    <S.WrapperCards>
      {placeOptions.map(option => (
        <Fragment key={option.placeId}>
          <CardOptionsPlaces
            placeOption={option}
            onChooseCard={handleChooseCard}
          />
        </Fragment>
      ))}
    </S.WrapperCards>
  )
}

const collapseSettings = ({
  handleChooseCard,
  handleChooseGroup,
  placeOptions,
  placesGroupsOptions
}) => [
  {
    icon: <S.PlaceIcon />,
    heading: 'Selecionar Espaços',
    children: (
      <>
        <Select options={placesGroupsOptions} onChange={handleChooseGroup} />
        <PlacesOptions
          placeOptions={placeOptions}
          onChooseCard={handleChooseCard}
        />
      </>
    )
  },
  {
    icon: <S.ScheduleIcon />,
    heading: 'Selecionar Horários',
    children: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, nisi sed consectetur sagittis, nisl erat cursus lacus, eget
        condimentum nunc nisl eu nisi.
      </div>
    )
  }
]

const ScheduleReservations = ({
  placeOptions,
  placesGroupsOptions
}: ScheduleReservationsProps) => {
  const [activeCollapse, setActiveCollapse] = useState(0)

  const handleChooseCard = (option: PlaceOptionsData) => {
    console.log(option)
  }

  const handleChooseGroup = (value: string) => {
    console.log(value)
  }

  return (
    <S.Wrapper>
      <S.Title>Escolha seu espaço</S.Title>
      <S.Content>
        {collapseSettings({
          placeOptions,
          placesGroupsOptions,
          handleChooseCard,
          handleChooseGroup
        }).map((item, index) => (
          <Fragment key={index}>
            <Collapse
              icon={item.icon}
              heading={<S.Heading>{index + 1 + '. ' + item.heading}</S.Heading>}
              isOpen={activeCollapse === index}
              setOpen={setActiveCollapse}
              order={index}
            >
              {item.children}
            </Collapse>
          </Fragment>
        ))}
      </S.Content>
    </S.Wrapper>
  )
}

export default ScheduleReservations
