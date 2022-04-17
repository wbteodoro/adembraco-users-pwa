import { useCallback, useState } from 'react'
import Link from 'next/link'
import Button from '@/components/button'
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

const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = useCallback(() => {
    setIsOpen(prevState => !prevState)
  }, [])

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <Button
          icon={!isOpen ? <S.MenuIcon /> : <S.CloseIcon />}
          variant="secondary"
          onClick={handleToggle}
        />
        <S.Avatar src="/images/default-avatar.png" alt="avatar" />
        <S.Logo src="/icon-192x192.png" alt="logo" />
      </S.WrapperHeader>

      <S.SideMenu isOpen={isOpen}>
        <S.TitleSidebar>Olá, Fulano da Silva</S.TitleSidebar>
        <S.WrapperMenuItems>
          {menuItems.map((item, index) => (
            <S.MenuItem key={index}>
              <Link href={item.href} passHref>
                <S.MenuLink onClick={handleToggle}>
                  {!!item.icon && item.icon}
                  {item.label}
                </S.MenuLink>
              </Link>
            </S.MenuItem>
          ))}
        </S.WrapperMenuItems>
      </S.SideMenu>
    </S.Wrapper>
  )
}

export default HeaderMenu
