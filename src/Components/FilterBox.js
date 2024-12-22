import React, { useState } from 'react';

function FilterBox({ onFilter }) {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value); 
        onFilter(value); 
    };

    return (
        <input
            type="text"
            placeholder="Search students..."
            value={search}
            onChange={handleSearch}
            style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
        />
    );
}

export default FilterBox;
