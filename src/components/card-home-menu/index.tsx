import Link from 'next/link'
import * as S from './styles'

type CardHomeMenuProps = {
  icon: React.ReactNode
  label: string
  href: string
}

const CardHomeMenu = ({ icon, label, href }: CardHomeMenuProps) => {
  return (
    <Link href={href} passHref>
      <S.Wrapper>
        {!!icon && <S.MenuItemIcon>{icon}</S.MenuItemIcon>}
        {!!label && <S.MenuItemLabel>{label}</S.MenuItemLabel>}
      </S.Wrapper>
    </Link>
  )
}

export default CardHomeMenu
