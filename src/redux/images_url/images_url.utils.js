export const genderShuffle = (payload, women, men) => {
  console.log(payload)
  return payload.gender === 'MEN' ? men : payload.gender === 'WOMEN' ? women : null
}
