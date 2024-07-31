import React from 'react';
import { Book as BookType } from '../types';
import styled from 'styled-components';

interface Props {
    book: BookType;
    onAdd: (isbn: string) => void;
    onRemove: (isbn: string) => void;
    isInReadingList: boolean;
}

const BookContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    img {
        max-width: 100px;
        margin-right: 20px;
        border-radius: 4px;
    }

    button {
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        background-color: #007bff;
        color: white;
        cursor: pointer;

        &:hover {
            background-color: #0056b3;
        }
    }
`;

const Book: React.FC<Props> = ({ book, onAdd, onRemove, isInReadingList }) => {
    return (
        <BookContainer>
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
        </BookContainer>
    );
};

export default Book;
