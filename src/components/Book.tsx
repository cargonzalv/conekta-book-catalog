import React from 'react';
import { Book as BookType } from '../types';

interface Props {
    book: BookType;
    onAdd: (isbn: string) => void;
    onRemove: (isbn: string) => void;
    isInReadingList: boolean;
}

const Book: React.FC<Props> = ({ book, onAdd, onRemove, isInReadingList }) => {
    return (
        <div className="book">
            <img src={book.cover} alt={book.title} />
            <div>
                <h2>{book.title}</h2>
                <p>{book.synopsis}</p>
                {isInReadingList ? (
                    <button onClick={() => onRemove(book.ISBN)}>Remove from Reading List</button>
                ) : (
                    <button onClick={() => onAdd(book.ISBN)}>Add to Reading List</button>
                )}
            </div>
        </div>
    );
};

export default Book;
