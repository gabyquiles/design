import '@testing-library/jest-dom'
import {type TestingLibraryMatchers} from '@testing-library/jest-dom/matchers'

declare global {
  namespace vitest {
    interface Matchers<R = void, T = {}>
      extends TestingLibraryMatchers<
        ReturnType<typeof expect.stringContaining>,
        R
      > {}
  }
}