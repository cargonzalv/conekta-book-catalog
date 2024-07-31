import React from 'react';
import { render, screen } from '@testing-library/react';
import ReadingList from '../ReadingList';
import { Book } from '../../types';

const mockBooks: Book[] = [
  {
    title: "El Señor de los Anillos",
    pages: 1200,
    genre: "Fantasía",
    cover: "https://example.com/cover.jpg",
    synopsis: "Una aventura épica en un mundo de fantasía llamado la Tierra Media.",
    year: 1954,
    ISBN: "978-0618640157",
    author: { name: "J.R.R. Tolkien", otherBooks: ["El Hobbit", "El Silmarillion"] }
  },
];

describe('ReadingList Component', () => {
  test('renders books in the reading list', () => {
    render(<ReadingList readingList={mockBooks} onRemove={() => {}} />);
    const bookTitle = screen.getByText(/El Señor de los Anillos/i);
    expect(bookTitle).toBeInTheDocument();
  });

  test('renders message when reading list is empty', () => {
    render(<ReadingList readingList={[]} onRemove={() => {}} />);
    const emptyMessage = screen.getByText(/Your reading list is empty/i);
    expect(emptyMessage).toBeInTheDocument();
  });
});
