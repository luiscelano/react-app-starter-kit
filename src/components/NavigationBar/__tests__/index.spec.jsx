import { render, screen } from '@testing-library/react';
import NavigationBar from '../index';
import { useDispatch, useSelector } from 'react-redux'
import { renderWithProviders } from '../../../utils/testUtils';


jest.mock('react-redux', ()=> ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}))

const dispatch = jest.fn()

describe('NavigationBar', () => {

  beforeEach(()=> {
    useDispatch.mockReturnValue(dispatch)
    useSelector.mockReturnValue(0)
  })

  test('renders NavigationBar', () => {
    render(<NavigationBar />);
    const linkElement = screen.getByText(/Navigation bar/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders NavigationBar with counter initialized as 0', () => {
    renderWithProviders(<NavigationBar />);
    const linkElement = screen.getByText(/count: 0/i);
    expect(linkElement).toBeInTheDocument();
  });
})
