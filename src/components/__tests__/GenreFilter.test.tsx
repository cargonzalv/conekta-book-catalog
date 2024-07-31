import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GenreFilter from '../GenreFilter';

describe('GenreFilter Component', () => {
  test('renders genre filter dropdown', () => {
    render(<GenreFilter genres={['Fantasía', 'Ciencia ficción']} selectedGenre="" onSelectGenre={() => {}} />);
    const genreSelect = screen.getByLabelText(/Filter by Genre/i);
    expect(genreSelect).toBeInTheDocument();
  });

  test('calls onSelectGenre with the correct genre', () => {
    const onSelectGenre = jest.fn();
    render(<GenreFilter genres={['Fantasía', 'Ciencia ficción']} selectedGenre="" onSelectGenre={onSelectGenre} />);
    const genreSelect = screen.getByLabelText(/Filter by Genre/i);
    fireEvent.change(genreSelect, { target: { value: 'Fantasía' } });
    expect(onSelectGenre).toHaveBeenCalledWith('Fantasía');
  });
});
