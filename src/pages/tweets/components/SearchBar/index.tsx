// components/SearchBar.tsx
import React, { useEffect, useState, type ChangeEvent } from "react";
import { Container, IconWrapper, Input, SearchIcon } from "./searchBar.styles";
import searchSvg from "../../../../assets/search.svg";

interface Props {
  value: string;
  onChange: (value: string) => void;
  hasError?: boolean;
}
const SearchBar: React.FC<Props> = ({ value, onChange, hasError }) => {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      onChange(localValue);
    }, 500); // 0.5s debounce

    return () => clearTimeout(handler);
  }, [localValue, onChange]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
  };

  return (
    <Container>
      <IconWrapper>
        <SearchIcon src={searchSvg} alt="searchIcon" />
      </IconWrapper>

      <Input
        value={localValue}
        onChange={handleChange}
        hasError={hasError}
        placeholder="Search tweets…"
      />
    </Container>
  );
};

export default SearchBar;
