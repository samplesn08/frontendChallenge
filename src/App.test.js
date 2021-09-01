import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app as expected', () => {
  render(<App />);
  const element = screen.getByText(/your wall/i);
  expect(element).toBeInTheDocument();
});
