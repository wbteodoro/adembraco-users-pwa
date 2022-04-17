import * as React from 'react'
import Stepper from '@/components/stepper'
import ScheduleReservations, {
  PlacesOptionsProps
} from '@/components/schedule-reservations'
import { GenericOptionType } from '@/types/fields'
import * as S from './styles'

const stepsSettings = [
  { label: 'Reservar' },
  { label: 'Pagamento' },
  { label: 'Confirmação' }
]

type TemplateReservationProps = {
  placesGroupsOptions: GenericOptionType[]
  onChooseGroup?(group: GenericOptionType): void
} & Pick<PlacesOptionsProps, 'placeOptions' | 'onChooseCard'>

const TemplateReservations = ({
  placeOptions,
  placesGroupsOptions,
  onChooseCard,
  onChooseGroup
}: TemplateReservationProps) => {
  const [currentStep, setCurrentStep] = React.useState(0)

  const handleBackStep = React.useCallback(() => {
    setCurrentStep(prevState => prevState - 1)
  }, [])

  const handleForwardStep = React.useCallback(() => {
    setCurrentStep(prevState => prevState + 1)
  }, [])

  const handleChangePreviousStep = React.useCallback((backTo: number) => {
    setCurrentStep(backTo)
  }, [])

  const handleFinishStepper = () => {
    alert('Finish stepper')
  }

  return (
    <Stepper
      steps={stepsSettings}
      currentStep={currentStep}
      onBackToStep={handleChangePreviousStep}
      onBackStep={handleBackStep}
      onForwardStep={handleForwardStep}
      onFinishStepper={handleFinishStepper}
    >
      <S.Wrapper>
        {currentStep === 0 && (
          <ScheduleReservations
            placesGroupsOptions={placesGroupsOptions}
            placeOptions={placeOptions}
            onChooseGroup={onChooseGroup}
            onChooseCard={onChooseCard}
          />
        )}
        {currentStep === 1 && (
          <S.Content>
            <S.Title>Pagamento</S.Title>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              consectetur, nisi sed consectetur sagittis, nisl erat cursus
              lacus, eget condimentum nunc nisl eu nisi.
            </p>
          </S.Content>
        )}
        {currentStep === 2 && (
          <S.Content>
            <S.Title>Confirmação</S.Title>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              consectetur, nisi sed consectetur sagittis, nisl erat cursus
              lacus, eget condimentum nunc nisl eu nisi.
            </p>
          </S.Content>
        )}
      </S.Wrapper>
    </Stepper>
  )
}

export default TemplateReservations
