import React from 'react';

interface Props {
    genres: string[];
    selectedGenre: string;
    onSelectGenre: (genre: string) => void;
}

const GenreFilter: React.FC<Props> = ({ genres, selectedGenre, onSelectGenre }) => {
    return (
        <div>
            <label htmlFor="genre-filter">Filter by Genre:</label>
            <select id="genre-filter" value={selectedGenre} onChange={e => onSelectGenre(e.target.value)}>
                <option value="">All</option>
                {genres.map(genre => (
                    <option key={genre} value={genre}>
                        {genre}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default GenreFilter;
