import { useRouter } from 'next/router'
import HeaderMenu from '@/components/header-menu'
import * as S from './styles'

const MainLayout = ({ children }) => {
  const router = useRouter()

  if (router.pathname !== '/entrar')
    return (
      <S.Wrapper>
        <HeaderMenu />
        <S.Content>{children}</S.Content>
      </S.Wrapper>
    )

  return <>{children}</>
}

export default MainLayout
