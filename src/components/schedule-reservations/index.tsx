import { Fragment, useState } from 'react'
import Collapse from '@/components/collapse'
import CardOptionsPlaces, {
  PlaceOptionsData
} from '@/components/card-options-places'
import * as S from './styles'

export type PlacesOptionsProps = {
  onChoose: (placeOptions: PlaceOptionsData) => void
  placeOptions: PlaceOptionsData[]
}

const PlacesOptions = ({ onChoose, placeOptions }: PlacesOptionsProps) => {
  const handleChoose = (option: PlaceOptionsData) => {
    !!onChoose && onChoose(option)
  }

  return (
    <S.WrapperCards>
      {placeOptions.map(option => (
        <Fragment key={option.placeId}>
          <CardOptionsPlaces placeOption={option} onChoose={handleChoose} />
        </Fragment>
      ))}
    </S.WrapperCards>
  )
}

const collapseSettings = ({ handleChoose, placeOptions }) => [
  {
    icon: <S.PlaceIcon />,
    heading: 'Selecionar Espaços',
    children: (
      <PlacesOptions placeOptions={placeOptions} onChoose={handleChoose} />
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

const ScheduleReservations = ({ placeOptions }) => {
  const [activeCollapse, setActiveCollapse] = useState(0)

  const handleChoose = (option: PlaceOptionsData) => {
    console.log(option)
  }

  return (
    <S.Wrapper>
      <S.Title>Escolha seu espaço</S.Title>
      <S.Content>
        {collapseSettings({ placeOptions, handleChoose }).map((item, index) => (
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
