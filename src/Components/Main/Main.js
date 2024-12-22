import React, { useState } from 'react';
import FilterBox from '../FilterBox';
import Students from './Student/Students';

function Main() {
    const [search, setSearch] = useState('');

    const handleFilter = (searchValue) => {
        setSearch(searchValue); 
    };

    return (
        <main style={{ padding: '1rem' }}>
            <FilterBox onFilter={handleFilter} />
            <Students search={search} />
        </main>
    );
}

export default Main;
