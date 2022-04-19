type CurrencyFormatterType = {
  value: number
  withSign?: boolean
}

export const currencyFormatter = ({
  value,
  withSign = true
}: CurrencyFormatterType): string => {
  const haveSign = isSigned => value => `${isSigned ? 'R$ ' : ''}${value}`
  const signed = haveSign(withSign)
  if (value == 0) return signed('0,00')
  if (!value) return ''

  const formattedValue = signed(
    value
      .toFixed(2)
      .replace(/\./g, ',')
      .replace(/\d(?=(\d{3})+,)/g, '$&.')
  )

  return formattedValue
}
