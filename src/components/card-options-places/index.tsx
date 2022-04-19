import * as S from './styles'
import { PlaceOptionsData } from '@/types'

type CardOptionsPlacesProps = {
  placeOption: PlaceOptionsData
  onChooseCard: (option: PlaceOptionsData) => void
  isActive: boolean
}

const CardOptionsPlaces = ({
  placeOption,
  onChooseCard,
  isActive
}: CardOptionsPlacesProps) => {
  const handleChoose = () => {
    !!onChooseCard && onChooseCard(placeOption)
  }

  return (
    <S.Wrapper onClick={handleChoose} isActive={isActive}>
      <S.ImageWrapper>
        <S.Thumbnail src={placeOption.imgUrl} alt={placeOption.name} />
      </S.ImageWrapper>
      <S.OptionName>{placeOption.name}</S.OptionName>
      <S.Description>{placeOption.description}</S.Description>
    </S.Wrapper>
  )
}

export default CardOptionsPlaces
