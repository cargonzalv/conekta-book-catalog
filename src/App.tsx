import React, { useState, useEffect } from 'react';
import BookList from './components/BookList';
import ReadingList from './components/ReadingList';
import GenreFilter from './components/GenreFilter';
import booksData from './data/books.json';
import { Book } from './types';
import useLocalStorage from './hooks/useLocalStorage';
import './styles.css';

const App: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [readingList, setReadingList] = useLocalStorage<Book[]>('readingList', []);
    const [selectedGenre, setSelectedGenre] = useState<string>('');

    useEffect(() => {
        const booksFromJson = booksData.library.map(item => item.book);
        setBooks(booksFromJson);
    }, []);

    const addToReadingList = (isbn: string) => {
        const bookToAdd = books.find(book => book.ISBN === isbn);
        if (bookToAdd && !readingList.includes(bookToAdd)) {
            setReadingList([...readingList, bookToAdd]);
        }
    };

    const removeFromReadingList = (isbn: string) => {
        setReadingList(readingList.filter(book => book.ISBN !== isbn));
    };

    const filterByGenre = (genre: string) => {
        setSelectedGenre(genre);
    };

    const filteredBooks = selectedGenre ? books.filter(book => book.genre === selectedGenre) : books;

    return (
        <div className="App">
            <h1>Book Catalog</h1>
            <GenreFilter
                genres={[...new Set(books.map(book => book.genre))]}
                selectedGenre={selectedGenre}
                onSelectGenre={filterByGenre}
            />
            <BookList
                books={filteredBooks}
                onAdd={addToReadingList}
                onRemove={removeFromReadingList}
                readingList={readingList}
            />
            <ReadingList readingList={readingList} onRemove={removeFromReadingList} />
        </div>
    );
};

export default App;
