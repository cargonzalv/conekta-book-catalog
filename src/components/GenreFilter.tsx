import React from 'react';
import styled from 'styled-components';

interface Props {
    genres: string[];
    selectedGenre: string;
    onSelectGenre: (genre: string) => void;
}

const FilterContainer = styled.div`

    label {
        margin-right: 10px;
    }

    select {
        padding: 5px;
        border-radius: 4px;
    }
`;

const GenreFilter: React.FC<Props> = ({ genres, selectedGenre, onSelectGenre }) => {
    return (
        <FilterContainer>
            <label htmlFor="genre-filter">Filter by Genre:</label>
            <select id="genre-filter" value={selectedGenre} onChange={e => onSelectGenre(e.target.value)}>
                <option value="">All</option>
                {genres.map(genre => (
                    <option key={genre} value={genre}>
                        {genre}
                    </option>
                ))}
            </select>
        </FilterContainer>
    );
};

export default GenreFilter;
