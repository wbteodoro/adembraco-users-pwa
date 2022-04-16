import { useCallback, useState } from 'react'
import Link from 'next/link'
import Button from '../button'
import * as S from './styles'

const menuItems = [
  {
    label: 'Reservas',
    href: '/reservas'
  },
  {
    label: 'Inscrições',
    href: '/inscricoes'
  },
  {
    label: 'Histórico',
    href: '/historico'
  },
  {
    label: 'Meus Dados',
    href: '/meus-dados'
  },
  {
    label: 'Sair',
    href: '/entrar'
  }
]

const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = useCallback(() => {
    setIsOpen(prevState => !prevState)
  }, [])

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <Button
          icon={!isOpen ? <S.MenuIcon /> : <S.CloseIcon />}
          variant="secondary"
          onClick={handleClick}
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
                <S.MenuLink>{item.label}</S.MenuLink>
              </Link>
            </S.MenuItem>
          ))}
        </S.WrapperMenuItems>
      </S.SideMenu>
    </S.Wrapper>
  )
}

export default HeaderMenu
