import React from 'react';

interface SearchProps {
  placeHolder: string;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({ placeHolder, searchValue, setSearchValue }) => {
    return (
        <div className="mt-6 h-12 w-full rounded-lg bg-[#edf0f3] flex items-center">
        <input
            className="grow h-full px-5 rounded-lg placeholder-gray-400 bg-[#edf0f3] text-primary-typo placeholder:text-primary-typo-light border-none outline-none none-ring-shadow"
            placeholder={placeHolder}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
        />
        </div>
    );
};

export default Search;
