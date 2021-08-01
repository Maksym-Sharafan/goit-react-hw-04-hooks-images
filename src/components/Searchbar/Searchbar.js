import { useState } from 'react';

export default function Searchbar({ onSubmit }) {
  const [searchName, setSearchName] = useState('');


  const handleNameChange = event => {
    const searchValue = event.currentTarget.value.toLowerCase().trim();
    setSearchName(searchValue);
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(searchName);
    setSearchName('');
  };


  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleNameChange}
          value={searchName}
        />
      </form>
    </header>
  );

};
