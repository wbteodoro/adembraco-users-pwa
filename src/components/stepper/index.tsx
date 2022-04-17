import * as React from 'react'
import Button from '@/components/button'
import * as S from './styles'

export type StepperProps = {
  steps: { label: string }[]
  currentStep: number
  onBackToStep(backTo: number): void
  onForwardStep(): void
  onBackStep(): void
  onFinishStepper(): void
  children: React.ReactNode
}

const Stepper = ({
  steps,
  currentStep,
  onBackToStep,
  onForwardStep,
  onBackStep,
  onFinishStepper,
  children
}: StepperProps) => {
  const [lineWidth, setLineWidth] = React.useState(1)
  const [elRefs, setElRefs] = React.useState([])

  const stepsLength = steps.length

  const setSizeLineStepper = React.useCallback(() => {
    const left = elRefs[0]?.current.getBoundingClientRect().left
    const right = elRefs[stepsLength - 1]?.current.getBoundingClientRect().right
    const width = right - left * 2
    setLineWidth(width)
  }, [elRefs, stepsLength])

  React.useEffect(() => {
    setElRefs(elRefs =>
      Array(stepsLength)
        .fill(null)
        .map((_, i) => elRefs[i] || React.createRef())
    )
    setSizeLineStepper()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lineWidth, stepsLength])

  React.useEffect(() => {
    window.addEventListener('resize', setSizeLineStepper)
    return () => window.removeEventListener('resize', setSizeLineStepper)
  }, [setSizeLineStepper])

  const handleChangePreviousStep = React.useCallback(
    (backTo: number) => {
      !!onBackToStep && onBackToStep(backTo)
    },
    [onBackToStep]
  )

  if (elRefs.length)
    return (
      <S.Wrapper>
        <S.LineStepper lineWidth={lineWidth} />
        <S.Stepper>
          {steps.map((step, index) => {
            const isActive = index === currentStep
            const isCompleted = index < currentStep

            return (
              <S.Stage
                key={index}
                isActive={isActive}
                isCompleted={isCompleted}
                disabled={!isCompleted}
                onClick={() =>
                  isCompleted ? handleChangePreviousStep(index) : null
                }
              >
                <S.StepStage
                  isActive={isActive}
                  isCompleted={isCompleted}
                  ref={elRefs[index]}
                >
                  {!isCompleted ? index + 1 : <S.CompletedIcon />}
                </S.StepStage>
                <S.StepLabel isActive={isActive} isCompleted={isCompleted}>
                  {step.label}
                </S.StepLabel>
              </S.Stage>
            )
          })}
        </S.Stepper>
        {children}

        <S.ActionArea>
          <Button
            variant="secondary"
            disabled={currentStep === 0}
            onClick={onBackStep}
          >
            Anterior
          </Button>
          <Button
            onClick={
              currentStep === stepsLength - 1 ? onFinishStepper : onForwardStep
            }
          >
            {currentStep === stepsLength - 1 ? 'Finalizar' : 'Próximo'}
          </Button>
        </S.ActionArea>
      </S.Wrapper>
    )

  return <>{children}</>
}

export default Stepper
