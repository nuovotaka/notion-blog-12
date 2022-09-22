import { render } from '@testing-library/react'
import Index from '../../src/pages/index'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/',
      pathname: '/',
    }
  },
}))

describe('Index', () => {
  it('renders the page unchanged', () => {
    const { container } = render(<Index firstPost={undefined} />)
    expect(container).toMatchSnapshot()
  })
})
