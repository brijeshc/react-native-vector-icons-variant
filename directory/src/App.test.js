import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn directory header', () => {
  render(<App />);
  const headerElement = screen.getByText(/react-native-vector-icons-variant directory/i);
  expect(headerElement).toBeInTheDocument();
});
