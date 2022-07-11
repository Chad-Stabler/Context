import { render, screen } from '@testing-library/react';
import App from './App';

test('renders p2', () => {
  render(<App />);
  const linkElement = screen.getByText(/2/i);
  expect(linkElement).toBeInTheDocument();
});
