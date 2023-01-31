import { useState } from 'react';

function SearchBar({ onFormSubmit }) {
  const [term, setTerm] = useState('');

  const handleChange = event => {
    setTerm(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    onFormSubmit(term);
    setTerm('');
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form " onSubmit={handleFormSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input onChange={handleChange} value={term} type="text" />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
