import { useEffect, useState } from 'react';

function SearchBar({ initialValue = '', onSearch, loading = false }) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  function submit() {
    onSearch?.(value);
  }

  function onKeyDown(e) {
    if (e.key === 'Enter') submit();
  }

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Enter city name (e.g., Chennai)"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onKeyDown}
        disabled={loading}
      />
      <button className="search__button" onClick={submit} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
    </div>
  );
}

export default SearchBar;
