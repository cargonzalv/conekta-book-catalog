import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Book from '../Book';
import { Book as BookType } from '../../types';

const mockBook: BookType = {
  title: "El Señor de los Anillos",
  pages: 1200,
  genre: "Fantasía",
  cover: "https://example.com/cover.jpg",
  synopsis: "Una aventura épica en un mundo de fantasía llamado la Tierra Media.",
  year: 1954,
  ISBN: "978-0618640157",
  author: { name: "J.R.R. Tolkien", otherBooks: ["El Hobbit", "El Silmarillion"] },
};

describe('Book Component', () => {
  test('renders book details', () => {
    render(<Book book={mockBook} onAdd={() => {}} onRemove={() => {}} isInReadingList={false} />);
    const titleElement = screen.getByText(/El Señor de los Anillos/i);
    const synopsisElement = screen.getByText(/Una aventura épica en un mundo de fantasía/i);
    expect(titleElement).toBeInTheDocument();
    expect(synopsisElement).toBeInTheDocument();
  });

  test('shows "Add to Reading List" button if the book is not in the reading list', () => {
    render(<Book book={mockBook} onAdd={() => {}} onRemove={() => {}} isInReadingList={false} />);
    const addButton = screen.getByText(/Add to Reading List/i);
    expect(addButton).toBeInTheDocument();
  });

  test('shows "Remove from Reading List" button if the book is in the reading list', () => {
    render(<Book book={mockBook} onAdd={() => {}} onRemove={() => {}} isInReadingList={true} />);
    const removeButton = screen.getByText(/Remove from Reading List/i);
    expect(removeButton).toBeInTheDocument();
  });

  test('calls onAdd when "Add to Reading List" button is clicked', () => {
    const onAddMock = jest.fn();
    render(<Book book={mockBook} onAdd={onAddMock} onRemove={() => {}} isInReadingList={false} />);
    const addButton = screen.getByText(/Add to Reading List/i);
    fireEvent.click(addButton);
    expect(onAddMock).toHaveBeenCalledWith(mockBook.ISBN);
  });

  test('calls onRemove when "Remove from Reading List" button is clicked', () => {
    const onRemoveMock = jest.fn();
    render(<Book book={mockBook} onAdd={() => {}} onRemove={onRemoveMock} isInReadingList={true} />);
    const removeButton = screen.getByText(/Remove from Reading List/i);
    fireEvent.click(removeButton);
    expect(onRemoveMock).toHaveBeenCalledWith(mockBook.ISBN);
  });
});
