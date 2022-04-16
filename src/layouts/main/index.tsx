import HeaderMenu from '@/components/header-menu'
import * as S from './styles'

const MainLayout = ({ children }) => {
  return (
    <S.Wrapper>
      <HeaderMenu />
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}

export default MainLayout
