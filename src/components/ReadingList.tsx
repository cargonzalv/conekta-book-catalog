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
            {readingList.length > 0 ? (
                readingList.map(book => (
                    <Book
                        key={book.ISBN}
                        book={book}
                        onAdd={() => {}}
                        onRemove={onRemove}
                        isInReadingList={true}
                    />
                ))
            ) : (
                <p>Your reading list is empty.</p>
            )}
        </div>
    );
};

export default ReadingList;
