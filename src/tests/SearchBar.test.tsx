import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

test('updates value when typing', () => {
  const handleChange = vi.fn();
  render(<SearchBar value="" onChange={handleChange} />);

  const input = screen.getByPlaceholderText(/search by name/i);
  fireEvent.change(input, { target: { value: 'bitcoin' } });

  expect(handleChange).toHaveBeenCalledWith('bitcoin');
});
