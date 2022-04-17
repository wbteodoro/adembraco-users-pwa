import * as React from 'react'
import Stepper from '@/components/stepper'
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
      <S.Wrapper>algumas coisa</S.Wrapper>
    </Stepper>
  )
}

export default TemplateReservations
