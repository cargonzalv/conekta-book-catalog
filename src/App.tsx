import React, { useState, useEffect } from 'react';
import BookList from './components/BookList';
import ReadingList from './components/ReadingList';
import GenreFilter from './components/GenreFilter';
import booksData from './data/books.json';
import { Book } from './types';
import useLocalStorage from './hooks/useLocalStorage';
import { Container, Header, Main, Footer, Counters, SearchBar, FilterBar, ReadingListSection } from './styles';

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [readingList, setReadingList] = useLocalStorage<Book[]>('readingList', []);
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

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

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = books.filter(book => {
    return (
      (selectedGenre ? book.genre === selectedGenre : true) &&
      (searchTerm ? book.title.toLowerCase().includes(searchTerm.toLowerCase()) : true)
    );
  });

  // Cross-Tab Synchronization
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'readingList') {
        setReadingList(JSON.parse(event.newValue || '[]'));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [setReadingList]);

  return (
    <Container>
      <Header>
        <h1>Book Catalog</h1>
        <FilterBar>
          <SearchBar>
            <input 
              type="text" 
              placeholder="Search books..." 
              value={searchTerm} 
              onChange={handleSearch} 
            />
          </SearchBar>
          <GenreFilter
            genres={[...new Set(books.map(book => book.genre))]}
            selectedGenre={selectedGenre}
            onSelectGenre={filterByGenre}
          />
        </FilterBar>
      </Header>
      <Main>
        <section>
          <h2>Available Books</h2>
          <Counters>
            <span>Total Books: {books.length}</span>
            <span>Reading List: {readingList.length}</span>
            <span>Filtered Books: {filteredBooks.length}</span>
          </Counters>
          <BookList
            books={filteredBooks}
            onAdd={addToReadingList}
            onRemove={removeFromReadingList}
            readingList={readingList}
          />
        </section>
        <ReadingListSection>
          <h2>My Reading List</h2>
          <ReadingList readingList={readingList} onRemove={removeFromReadingList} />
        </ReadingListSection>
      </Main>
      <Footer>
        <p>Book Catalog © 2024</p>
      </Footer>
    </Container>
  );
};

export default App;
