import { Fragment, useState } from 'react'
import Collapse from '@/components/collapse'
import * as S from './styles'

const collapseSettings = [
  {
    icon: <S.PlaceIcon />,
    heading: 'Selecionar Espaços',
    children: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, nisi sed consectetur sagittis, nisl erat cursus lacus, eget
        condimentum nunc nisl eu nisi.
      </div>
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

const ScheduleReservations = () => {
  const [activeCollapse, setActiveCollapse] = useState(0)

  return (
    <S.Wrapper>
      <S.Title>Escolha seu espaço</S.Title>
      <S.Content>
        {collapseSettings.map((item, index) => (
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
