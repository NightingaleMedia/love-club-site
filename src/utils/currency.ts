export const getPrice = (number: number, decimals = false) => {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimals ? 2 : 0,
  }).format(number * 0.01)
}
