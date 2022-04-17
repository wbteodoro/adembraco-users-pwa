import { Fragment } from 'react'
import CardHomeMenu from '@/components/card-home-menu'
import * as S from './styles'

const menuItems = [
  {
    label: 'Reservas',
    icon: <S.Icon />,
    href: '/reservas'
  },
  {
    label: 'Inscrições',
    icon: <S.Icon />,
    href: '/inscricoes'
  },
  {
    label: 'Histórico',
    icon: <S.Icon />,
    href: '/historico'
  },
  {
    label: 'Meus Dados',
    icon: <S.Icon />,
    href: '/meus-dados'
  },
  {
    label: 'Sair',
    icon: <S.Icon />,
    href: '/entrar'
  }
]

const TemplateHome = () => {
  return (
    <S.Wrapper>
      {menuItems.map((item, index) => (
        <Fragment key={item.label + index}>
          <CardHomeMenu icon={item.icon} label={item.label} href={item.href} />
        </Fragment>
      ))}
    </S.Wrapper>
  )
}

export default TemplateHome
