import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Book from '../Book';
import { Book as BookType } from '../../types';

const mockBook: BookType = {
  title: 'Test Book',
  cover: 'https://example.com/cover.jpg',
  synopsis: 'This is a test synopsis.',
  genre: 'Fiction',
  pages: 100,
  year: 2020,
  ISBN: '1234567890',
  author: {
    name: 'Test Author',
    otherBooks: [],
  },
};

describe('Book Component', () => {
  const mockOnAdd = jest.fn();
  const mockOnRemove = jest.fn();

  test('renders book details correctly', () => {
    render(<Book book={mockBook} onAdd={mockOnAdd} onRemove={mockOnRemove} isInReadingList={false} />);
    expect(screen.getByText(/Test Book/i)).toBeInTheDocument();
    expect(screen.getByText(/This is a test synopsis./i)).toBeInTheDocument();
  });

  test('calls onAdd when Add to Reading List button is clicked', () => {
    render(<Book book={mockBook} onAdd={mockOnAdd} onRemove={mockOnRemove} isInReadingList={false} />);
    const addButton = screen.getByText(/Add to Reading List/i);
    fireEvent.click(addButton);
    expect(mockOnAdd).toHaveBeenCalledWith('1234567890');
  });

  test('calls onRemove when Remove from Reading List button is clicked', () => {
    render(<Book book={mockBook} onAdd={mockOnAdd} onRemove={mockOnRemove} isInReadingList={true} />);
    const removeButton = screen.getByText(/Remove from Reading List/i);
    fireEvent.click(removeButton);
    expect(mockOnRemove).toHaveBeenCalledWith('1234567890');
  });

  test('shows X button only in reading list view', () => {
    render(<Book book={mockBook} onAdd={mockOnAdd} onRemove={mockOnRemove} isInReadingList={true} isInReadingListView={true} />);
    const removeButton = screen.getByText(/×/);
    expect(removeButton).toBeInTheDocument();
  });
});
