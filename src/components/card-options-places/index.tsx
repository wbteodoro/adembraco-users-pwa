import * as S from './styles'

export type PlaceOptionsData = {
  placeId: string
  imgUrl: string
  name: string
  description: string
}

type CardOptionsPlacesProps = {
  placeOption: PlaceOptionsData
  onChooseCard: (option: PlaceOptionsData) => void
}

const CardOptionsPlaces = ({
  placeOption,
  onChooseCard
}: CardOptionsPlacesProps) => {
  const handleChoose = () => {
    !!onChooseCard && onChooseCard(placeOption)
  }

  return (
    <S.Wrapper onClick={handleChoose}>
      <S.ImageWrapper>
        <S.Thumbnail src={placeOption.imgUrl} alt={placeOption.name} />
      </S.ImageWrapper>
      <S.OptionName>{placeOption.name}</S.OptionName>
      <S.Description>{placeOption.description}</S.Description>
    </S.Wrapper>
  )
}

export default CardOptionsPlaces
