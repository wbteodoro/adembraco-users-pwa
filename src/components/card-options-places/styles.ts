import styled from 'styled-components'

export const Wrapper = styled.button<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;

  height: auto;
  width: 100%;
  min-width: 150px;
  flex-grow: 1;

  padding: 8px;
  border-radius: 8px;

  cursor: pointer;

  background: ${({ theme, isActive }) =>
    theme.colors[isActive ? 'lightGrey' : 'white']};
  border: 2px solid
    ${({ theme, isActive }) => theme.colors[isActive ? 'orange' : 'white']};
  box-shadow: ${({ theme }) => theme.effects.dropShadow.elev1};

  overflow-y: auto;
`

export const OptionName = styled.span``

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: ${({ theme }) => theme.font.regular};
  text-align: justify;
`

export const ImageWrapper = styled.div`
  height: 140px;
  width: 100%;
  overflow: hidden;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  display: flex;
`

export const Thumbnail = styled.img`
  min-width: 100%;
  width: auto;
  height: 100%;
  object-fit: cover;
  object-position: center;
`
