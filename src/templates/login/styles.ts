import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    259deg,
    rgba(255, 255, 255, 1) 21%,
    rgba(0, 0, 0, 0.13769257703081228) 100%
  );
`

export const ContainerLogin = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 24px;
  border-radius: 8px;
  background-color: transparent;
`

export const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`

export const Logo = styled.img`
  width: auto;
  height: 80px;
`
