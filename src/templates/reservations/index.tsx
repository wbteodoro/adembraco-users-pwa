import * as React from 'react'
import Stepper from '@/components/stepper'
import ScheduleReservations from '@/components/schedule-reservations'
import PaymentReservations from '@/components/payment-reservations'
import useService from '@/contexts/services'
import * as S from './styles'

const stepsSettings = [
  { label: 'Reservar' },
  { label: 'Pagamento' },
  { label: 'Confirmação' }
]

const TemplateReservations = () => {
  const { saveReservations, getReservationsData, selectedSchedule } =
    useService()

  const [currentStep, setCurrentStep] = React.useState(0)

  const handleBackStep = React.useCallback(() => {
    setCurrentStep(prevState => prevState - 1)
  }, [])

  const handleForwardStep = React.useCallback(() => {
    if (currentStep === 0) {
      saveReservations()
      getReservationsData()
    }
    setCurrentStep(prevState => prevState + 1)
  }, [currentStep, getReservationsData, saveReservations])

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
      disabledNextStepButton={selectedSchedule.length <= 0}
    >
      <S.Wrapper>
        {currentStep === 0 && <ScheduleReservations />}
        {currentStep === 1 && <PaymentReservations />}
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
