export const increase = (count) => {
  return {
    type: 'INCREASE',
    count
  }
}

export const decrease = (count) => {
  return {
    type: 'DECREASE',
    count
  }
}
