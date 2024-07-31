import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    localStorage.clear(); // Clear localStorage before each test
  });

  test('renders the header title', () => {
    render(<App />);
    const headerElement = screen.getByText(/Library Zen/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders book list and allows adding/removing from the reading list', async () => {
    render(<App />);
    const addButton = await screen.findByText(/Add to Reading List/i);
    fireEvent.click(addButton);

    const readingList = screen.getByText(/Remove from Reading List/i);
    expect(readingList).toBeInTheDocument();

    fireEvent.click(readingList);
    const updatedAddButton = screen.getByText(/Add to Reading List/i);
    expect(updatedAddButton).toBeInTheDocument();
  });

  test('filters books by genre and updates counters', async () => {
    render(<App />);
    const genreFilter = screen.getByDisplayValue('All Genres');
    fireEvent.change(genreFilter, { target: { value: 'Fantasía' } });

    const filteredBooks = await screen.findAllByText(/Fantasía/i);
    expect(filteredBooks.length).toBeGreaterThan(0);

    const filteredCounter = screen.getByText(/Filtered Books:/i);
    expect(filteredCounter.textContent).toContain('Filtered Books: 2');
  });

  test('persists reading list in local storage', async () => {
    render(<App />);
    const addButton = await screen.findByText(/Add to Reading List/i);
    fireEvent.click(addButton);

    const storedReadingList = JSON.parse(localStorage.getItem('readingList') || '[]');
    expect(storedReadingList.length).toBe(1);
  });

  test('synchronizes state across tabs', async () => {
    render(<App />);
    const addButton = await screen.findByText(/Add to Reading List/i);
    fireEvent.click(addButton);

    window.dispatchEvent(new StorageEvent('storage', {
      key: 'readingList',
      newValue: JSON.stringify([]),
    }));

    await waitFor(() => {
      expect(screen.getByText(/Add to Reading List/i)).toBeInTheDocument();
    });
  });
});
