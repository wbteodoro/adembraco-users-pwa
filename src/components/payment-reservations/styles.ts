import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 8px;
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: ${({ theme }) => theme.font.bold};
  line-height: 20px;
`

export const TitleCard = styled.h1`
  font-size: ${({ theme }) => theme.font.sizes.small};
  color: ${({ theme }) => theme.colors.green};
  font-weight: ${({ theme }) => theme.font.medium};
  line-height: 16px;
`

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.extraLightGrey};
  padding: 8px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.lightGreen};
`
export const TextCardDetails = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: ${({ theme }) => theme.font.medium};
  line-height: 14px;
`

export const TextCardPrice = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  color: ${({ theme }) => theme.colors.orange};
  font-weight: ${({ theme }) => theme.font.bold};
  line-height: 16px;
`

export const CardPayment = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 12px;
  background-color: ${({ theme }) => theme.colors.extraLightGrey};
  padding: 8px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.lightGreen};
`

export const CardNumberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 8px;
`

export const CardNumber = styled.div`
  flex-shrink: 1;
  width: 100%;
  height: auto;
`

export const CardNumberCvv = styled.div`
  flex-shrink: 2;
  width: 100%;
  height: auto;
`
