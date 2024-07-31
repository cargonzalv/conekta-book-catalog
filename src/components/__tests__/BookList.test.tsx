import React from 'react';
import { render, screen } from '@testing-library/react';
import BookList from '../BookList';
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

describe('BookList Component', () => {
  test('renders a list of books', () => {
    render(<BookList books={mockBooks} onAdd={() => {}} onRemove={() => {}} readingList={[]} />);
    const bookTitle = screen.getByText(/El Señor de los Anillos/i);
    expect(bookTitle).toBeInTheDocument();
  });
});
