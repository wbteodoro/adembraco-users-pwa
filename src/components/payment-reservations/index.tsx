import useService from '@/contexts/services'
import Input from '@/components/input'
import { currencyFormatter } from '@/utils/helpers'
import * as S from './styles'

const PaymentReservations = () => {
  const { reservationsData } = useService()

  return (
    <S.Wrapper>
      <S.Title>Pagamento</S.Title>
      {reservationsData.schedules.length > 0 && (
        <S.CardDetails>
          <S.TitleCard>{`Detalhes da reserva (${reservationsData.place.name}) - ${reservationsData.date}`}</S.TitleCard>
          {reservationsData.schedules.map((schedule, index) => (
            <S.TextCardDetails key={schedule.scheduleId}>
              {`Horário ${index + 1}: Das ${schedule.startTime} hrs. até às ${
                schedule.endTime
              } hrs.`}
            </S.TextCardDetails>
          ))}
          <S.TextCardPrice>
            {'Valor total: ' +
              currencyFormatter({ value: reservationsData.totalPrice })}
          </S.TextCardPrice>
        </S.CardDetails>
      )}
      <S.CardPayment>
        <S.TitleCard>Forma de pagamento - Cartão de crédito</S.TitleCard>
        <Input
          name="cpf"
          placeholder="CPF"
          label="CPF"
          onChange={() => null}
          required
        />
        <Input
          name="personNameCredCard"
          placeholder="Nome mostrado no cartão"
          label="Nome do titular"
          onChange={() => null}
          required
        />
        <S.CardNumberWrapper>
          <S.CardNumber>
            <Input
              name="cardNumber"
              placeholder="Número do cartão"
              label="Número do cartão"
              onChange={() => null}
              required
            />
          </S.CardNumber>
          <S.CardNumberCvv>
            <Input
              name="cvv"
              placeholder="CVV"
              label="CVV"
              onChange={() => null}
              required
            />
          </S.CardNumberCvv>
        </S.CardNumberWrapper>
      </S.CardPayment>
    </S.Wrapper>
  )
}

export default PaymentReservations
