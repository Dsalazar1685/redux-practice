export const INCREASE_COUNT = 'INCREASE_COUNT'
export const DECREASE_COUNT = 'DECREASE_COUNT'
export const ADD_TO_LIST = 'ADD_TO_LIST'
export const REMOVE_FROM_LIST = 'REMOVE_FROM_LIST'

// {
//   type: 'ACTION_TYPE',
//   payload: someData,
//   error: Boolean,
//   meta: someOtherData
// }

export const countUp = () => ({
  type: INCREASE_COUNT
});

export const countDown = () => ({
type: DECREASE_COUNT
});

export const addItem = (item) => ({
  type: ADD_TO_LIST,
  payload: item
})

export const removeItem = (index) => ({
  type: REMOVE_FROM_LIST,
  payload: index
})
