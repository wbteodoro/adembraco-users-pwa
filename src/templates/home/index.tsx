import { Fragment } from 'react'
import CardHomeMenu from '@/components/card-home-menu'
import * as S from './styles'

const menuItems = [
  {
    label: 'Reservas',
    icon: <S.ReservationsIcon />,
    href: '/reservas'
  },
  {
    label: 'Inscrições',
    icon: <S.SubscriptionIcon />,
    href: '/inscricoes'
  },
  {
    label: 'Histórico',
    icon: <S.HistoryIcon />,
    href: '/historico'
  },
  {
    label: 'Meus Dados',
    icon: <S.UserIcon />,
    href: '/meus-dados'
  },
  {
    label: 'Sair',
    icon: <S.LogoutIcon />,
    href: '/entrar'
  }
]

const TemplateHome = () => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>Bem vindo, Fulano da Silva!</S.Title>
        <S.SubTitle>O que deseja fazer?</S.SubTitle>
      </S.TitleWrapper>
      {menuItems.map((item, index) => (
        <Fragment key={item.label + index}>
          <CardHomeMenu icon={item.icon} label={item.label} href={item.href} />
        </Fragment>
      ))}
    </S.Wrapper>
  )
}

export default TemplateHome
