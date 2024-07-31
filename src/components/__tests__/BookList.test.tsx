import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookList from '../BookList';
import { Book as BookType } from '../../types';

const mockBooks: BookType[] = [
  {
    title: 'Test Book 1',
    cover: 'https://example.com/cover1.jpg',
    synopsis: 'This is a test synopsis 1.',
    genre: 'Fiction',
    pages: 100,
    year: 2020,
    ISBN: '1234567890',
    author: {
      name: 'Test Author 1',
      otherBooks: [],
    },
  },
  {
    title: 'Test Book 2',
    cover: 'https://example.com/cover2.jpg',
    synopsis: 'This is a test synopsis 2.',
    genre: 'Fiction',
    pages: 150,
    year: 2021,
    ISBN: '0987654321',
    author: {
      name: 'Test Author 2',
      otherBooks: [],
    },
  },
];

describe('BookList Component', () => {
  const mockOnAdd = jest.fn();
  const mockOnRemove = jest.fn();
  const mockReadingList: BookType[] = [];

  test('renders book list correctly', () => {
    render(<BookList books={mockBooks} onAdd={mockOnAdd} onRemove={mockOnRemove} readingList={mockReadingList} />);
    expect(screen.getByText(/Test Book 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Book 2/i)).toBeInTheDocument();
  });

  test('calls onAdd when Add to Reading List button is clicked', () => {
    render(<BookList books={mockBooks} onAdd={mockOnAdd} onRemove={mockOnRemove} readingList={mockReadingList} />);
    const addButton = screen.getAllByText(/Add to Reading List/i)[0];
    fireEvent.click(addButton);
    expect(mockOnAdd).toHaveBeenCalledWith('1234567890');
  });

  test('calls onRemove when Remove from Reading List button is clicked', () => {
    render(<BookList books={mockBooks} onAdd={mockOnAdd} onRemove={mockOnRemove} readingList={[mockBooks[0]]} />);
    const removeButton = screen.getAllByText(/Remove from Reading List/i)[0];
    fireEvent.click(removeButton);
    expect(mockOnRemove).toHaveBeenCalledWith('1234567890');
  });
});
