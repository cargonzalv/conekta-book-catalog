import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    localStorage.clear(); // Clear localStorage before each test
  });

  test('renders the header title', () => {
    render(<App />);
    const headerElement = screen.getByRole('heading', { name: /Book Catalog/ });
    expect(headerElement).toBeInTheDocument();
  });

  test('renders book list and allows adding/removing from the reading list', async () => {
    render(<App />);

    const addButtons = await screen.findAllByRole('button', { name: /Add to Reading List/i });

    fireEvent.click(addButtons[0]);

    const removeButton = screen.getByRole('button', { name: /Remove from Reading List/i });
    expect(removeButton).toBeInTheDocument();

    fireEvent.click(removeButton);

    const newAddButtons = await screen.findAllByRole('button', { name: /Add to Reading List/i });
    expect(newAddButtons.length).toBe(addButtons.length);
  });

  test('filters books by genre and updates counters', async () => {
    render(<App />);

    const genreFilter = screen.getByDisplayValue('All Genres');

    fireEvent.change(genreFilter, { target: { value: 'Fantasía' } });
    

    const filteredBooks = await screen.findAllByText(/Fantasía/i);
    expect(filteredBooks.length).toBeGreaterThan(0);

    const filteredCounter = screen.getByText(/Filtered Books:/i);
    expect(filteredCounter.textContent).toContain('Filtered Books: 3');
  });

  test('persists reading list in local storage', async () => {
    render(<App />);

    const addButtons = await screen.findAllByRole('button', { name: /Add to Reading List/i });

    fireEvent.click(addButtons[0]);

    const storedReadingList = JSON.parse(localStorage.getItem('readingList') || '[]');
    expect(storedReadingList.length).toBe(1);
  });

  test('synchronizes state across tabs', async () => {
    render(<App />);

    const addButtons = await screen.findAllByRole('button', { name: /Add to Reading List/i });

    fireEvent.click(addButtons[0]);

    await act(async () => {
      window.dispatchEvent(new StorageEvent('storage', {
        key: 'readingList',
        newValue: JSON.stringify([]),
      }));
    });

    await waitFor(async () => {
      const newAddButtons = await screen.findAllByRole('button', { name: /Add to Reading List/i });
      expect(newAddButtons.length).toBe(addButtons.length);
    });
  });
});
