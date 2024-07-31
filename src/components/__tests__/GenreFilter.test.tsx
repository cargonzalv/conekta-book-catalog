import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GenreFilter from '../GenreFilter';

describe('GenreFilter Component', () => {
  const mockGenres = ['Fiction', 'Non-Fiction', 'Science Fiction'];
  const mockOnSelectGenre = jest.fn();

  test('renders genre filter options', () => {
    render(<GenreFilter genres={mockGenres} selectedGenre="" onSelectGenre={mockOnSelectGenre} />);
    expect(screen.getByDisplayValue('All Genres')).toBeInTheDocument();
    expect(screen.getByText('Fiction')).toBeInTheDocument();
    expect(screen.getByText('Non-Fiction')).toBeInTheDocument();
    expect(screen.getByText('Science Fiction')).toBeInTheDocument();
  });

  test('calls onSelectGenre when a genre is selected', () => {
    render(<GenreFilter genres={mockGenres} selectedGenre="" onSelectGenre={mockOnSelectGenre} />);
    const genreSelect = screen.getByDisplayValue('All Genres');
    fireEvent.change(genreSelect, { target: { value: 'Fiction' } });
    expect(mockOnSelectGenre).toHaveBeenCalledWith('Fiction');
  });

  test('displays the correct selected genre', () => {
    render(<GenreFilter genres={mockGenres} selectedGenre="Science Fiction" onSelectGenre={mockOnSelectGenre} />);
    expect(screen.getByDisplayValue('Science Fiction')).toBeInTheDocument();
  });
});
