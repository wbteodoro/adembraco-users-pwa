import { Fragment, useState } from 'react'
import Collapse from '@/components/collapse'
import * as S from './styles'

const collapseSettings = [
  {
    icon: <span>1.</span>,
    heading: 'SELECIONAR ESPAÇOS',
    children: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, nisi sed consectetur sagittis, nisl erat cursus lacus, eget
        condimentum nunc nisl eu nisi.
      </div>
    )
  },
  {
    icon: <span>2.</span>,
    heading: 'SELECIONAR DATA',
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
  //   const [isOpen, setIsOpen] = useState(active)

  //   const handleToggleCollapse = (index: number) => {
  //     if (index === activeCollapse) return setActiveCollapse(-1)
  //     return setActiveCollapse(index)
  //   }

  return (
    <S.Wrapper>
      <S.Title>Escolha seu espaço</S.Title>
      {collapseSettings.map((item, index) => (
        <Fragment key={index}>
          <Collapse
            icon={item.icon}
            heading={item.heading}
            isOpen={activeCollapse === index}
            setOpen={setActiveCollapse}
            order={index}
          >
            {item.children}
          </Collapse>
        </Fragment>
      ))}
    </S.Wrapper>
  )
}

export default ScheduleReservations
