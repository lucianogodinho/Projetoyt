import { createContext, useContext, useState } from "react";

interface SearchContextData {
  search: string;
  setSearch: (inputValue: string) => void;
}

interface SearchContextProps {
  children: React.ReactNode;
}

const SearchContext = createContext<SearchContextData>({} as SearchContextData);

export const SearchProvider: React.FC<SearchContextProps> = ({ children }) => {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export function useSearchContext() {
  return useContext(SearchContext);
}
