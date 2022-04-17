import * as React from 'react'
import Stepper from '@/components/stepper'
import ScheduleReservations from '@/components/schedule-reservations'
import * as S from './styles'

const stepsSettings = [
  { label: 'Reservar' },
  { label: 'Pagamento' },
  { label: 'Confirmação' }
]

const TemplateReservations = () => {
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
        {currentStep === 0 && <ScheduleReservations />}
        {currentStep === 1 && (
          <S.Content>
            <S.Title>Pagamento</S.Title>
            <S.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              consectetur, nisi sed consectetur sagittis, nisl erat cursus
              lacus, eget condimentum nunc nisl eu nisi.
            </S.Description>
          </S.Content>
        )}
        {currentStep === 2 && (
          <S.Content>
            <S.Title>Confirmação</S.Title>
            <S.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              consectetur, nisi sed consectetur sagittis, nisl erat cursus
              lacus, eget condimentum nunc nisl eu nisi.
            </S.Description>
          </S.Content>
        )}
      </S.Wrapper>
    </Stepper>
  )
}

export default TemplateReservations
