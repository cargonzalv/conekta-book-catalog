import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReadingList from '../ReadingList';
import { Book as BookType } from '../../types';

const mockReadingList: BookType[] = [
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
];

describe('ReadingList Component', () => {
  const mockOnRemove = jest.fn();

  test('renders reading list books correctly', () => {
    render(<ReadingList readingList={mockReadingList} onRemove={mockOnRemove} />);
    expect(screen.getByText(/Test Book 1/i)).toBeInTheDocument();
    expect(screen.getByText(/This is a test synopsis 1./i)).toBeInTheDocument();
  });

  test('calls onRemove when X button is clicked', () => {
    render(<ReadingList readingList={mockReadingList} onRemove={mockOnRemove} />);
    const removeButton = screen.getByText(/×/);
    fireEvent.click(removeButton);
    expect(mockOnRemove).toHaveBeenCalledWith('1234567890');
  });

  test('displays message when reading list is empty', () => {
    render(<ReadingList readingList={[]} onRemove={mockOnRemove} />);
    expect(screen.getByText(/Your reading list is empty./i)).toBeInTheDocument();
  });
});
