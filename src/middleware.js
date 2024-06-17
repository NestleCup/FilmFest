import { isRejectedWithValue } from '@reduxjs/toolkit'

export const rtkQueryErrorLogger = (api) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    if (action.payload.status === 400) {
      window.location.href = '/404'
    }
    console.warn('We got a rejected action!', action.payload.status === 400)
  }

  return next(action)
}
