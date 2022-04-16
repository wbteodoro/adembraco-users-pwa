import { useRouter } from 'next/router'
import Head from 'next/head'
import Button from '@/components/button'
import Input from '@/components/input'
import * as S from './styles'

const TemplateLogin = () => {
  const router = useRouter()

  const handleSubmit = e => {
    e.preventDefault()
    router.push('/reservas/quadras')
  }

  return (
    <>
      <Head>
        <title>ADEMBRACO - Login</title>
      </Head>
      <S.Wrapper>
        <S.ContainerLogin>
          <S.Title>LOGIN</S.Title>
          <S.Form noValidate onSubmit={handleSubmit}>
            <Input
              required
              label="Acesso"
              name="user"
              onChange={() => null}
              placeholder="Chave de acesso"
            />
            <Input
              required
              placeholder="Senha (mín. 8 dígitos)"
              label="Senha"
              name="password"
              type="password"
              onChange={() => null}
            />
            <Button type="submit" fullWidth>
              entrar
            </Button>
          </S.Form>

          <div>
            <Button variant="secondary" fullWidth>
              ainda não possuo cadastro
            </Button>
            <Button variant="secondary" fullWidth>
              esqueci minha senha
            </Button>
          </div>
        </S.ContainerLogin>
      </S.Wrapper>
    </>
  )
}

export default TemplateLogin
