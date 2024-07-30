import React from 'react';
import { Book as BookType } from '../types';
import Book from './Book';

interface Props {
    books: BookType[];
    onAdd: (isbn: string) => void;
    onRemove: (isbn: string) => void;
    readingList: BookType[];
}

const BookList: React.FC<Props> = ({ books, onAdd, onRemove, readingList }) => {
    return (
        <div>
            {books.map(book => (
                <Book
                    key={book.ISBN}
                    book={book}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    isInReadingList={!!readingList.find(b => b.ISBN === book.ISBN)}
                />
            ))}
        </div>
    );
};

export default BookList;
