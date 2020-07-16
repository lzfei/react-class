export const toCelsius = (fahrenheit) => {
  return fahrenheit ? (fahrenheit - 32) * 5 / 9 : '';
}
export const toFahrenheit = (celsius) => {
  return celsius ? (celsius * 9 / 5) + 32 : '';
}