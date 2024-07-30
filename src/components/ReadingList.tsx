import React from 'react';
import { Book as BookType } from '../types';
import Book from './Book';

interface Props {
    readingList: BookType[];
    onRemove: (isbn: string) => void;
}

const ReadingList: React.FC<Props> = ({ readingList, onRemove }) => {
    return (
        <div>
            <h2>My Reading List</h2>
            {readingList.map(book => (
                <Book
                    key={book.ISBN}
                    book={book}
                    onAdd={() => {}}
                    onRemove={onRemove}
                    isInReadingList={true}
                />
            ))}
        </div>
    );
};

export default ReadingList;
