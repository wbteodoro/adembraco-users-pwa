import styled from 'styled-components'
import { Check } from '@styled-icons/material'

type StageProps = {
  isActive: boolean
  isCompleted: boolean
}

const LINE_STEPPER_HEIGHT = 2
const STEP_STAGE_SIZE = LINE_STEPPER_HEIGHT * 12
const STAGE_SIZE = STEP_STAGE_SIZE * 2

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 16px 32px;
`

export const Stepper = styled.div`
  display: flex;
  z-index: 10;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
`

export const LineStepper = styled.div<{ lineWidth: number }>`
  position: absolute;
  height: ${LINE_STEPPER_HEIGHT}px;
  width: ${({ lineWidth }) => lineWidth}px;
  background-color: ${({ theme }) => theme.colors.orange};
  z-index: 5;
  transform: translateY(${STEP_STAGE_SIZE / 2 - 1}px);
`

export const Stage = styled.button<StageProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: ${STAGE_SIZE}px;
  gap: 4px;
  height: auto;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: ${({ isCompleted }) => (isCompleted ? 'pointer' : 'default')};
`

export const StepStage = styled.span<StageProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${STEP_STAGE_SIZE}px;
  width: ${STEP_STAGE_SIZE}px;
  border-radius: 50%;
  ${({ isCompleted, isActive, theme }) => `
    background-color: ${
      isActive || isCompleted ? theme.colors.green : theme.colors.grey
    };
    color:${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.medium};
  `}
`

export const StepLabel = styled.span<StageProps>`
  background-color: transparent;
  ${({ isCompleted, isActive, theme }) => `
    color: ${isActive || isCompleted ? theme.colors.green : theme.colors.grey};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.regular};
  `}
`

export const CompletedIcon = styled(Check).attrs({
  color: 'white',
  size: 18
})``

export const ActionArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
`
