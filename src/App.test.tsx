import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders the header title', () => {
    render(<App />);
    const headerElement = screen.getByText(/Book Catalog/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('adds a book to the reading list', () => {
    render(<App />);
    const addButton = screen.getByText(/Add to Reading List/i);
    fireEvent.click(addButton);
    const removeButton = screen.getByText(/Remove from Reading List/i);
    expect(removeButton).toBeInTheDocument();
  });

  test('removes a book from the reading list', () => {
    render(<App />);
    const addButton = screen.getByText(/Add to Reading List/i);
    fireEvent.click(addButton);
    const removeButton = screen.getByText(/Remove from Reading List/i);
    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
  });

  test('filters books by genre', () => {
    render(<App />);
    const genreSelect = screen.getByLabelText(/Filter by Genre/i);
    fireEvent.change(genreSelect, { target: { value: 'Fantasía' } });
    const bookTitle = screen.getByText(/El Señor de los Anillos/i);
    expect(bookTitle).toBeInTheDocument();
  });

  test('searches for a book by title', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/Search books.../i);
    fireEvent.change(searchInput, { target: { value: 'Dune' } });
    const bookTitle = screen.getByText(/Dune/i);
    expect(bookTitle).toBeInTheDocument();
  });
});
