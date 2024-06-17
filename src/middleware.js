import { isRejectedWithValue } from '@reduxjs/toolkit'

/**
 * Log a warning and show a toast!F
 */
export const rtkQueryErrorLogger = (api) => (next) => (action) => {
  // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
  if (isRejectedWithValue(action)) {
    if (action.payload.status === 400) {
      window.location.href = '/404'
    }
    console.warn('We got a rejected action!', action.payload.status === 400)
  }

  return next(action)
}
