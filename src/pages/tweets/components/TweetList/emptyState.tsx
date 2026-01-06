import React from "react";
import {
  EmptyStateContainer,
  EmptyStateSVG,
  EmptyStateText,
  Highlight,
} from "../SearchBar/searchBar.styles";

import searchEmptyState from "../../../../assets/searchEmptyState.svg";

interface Props {
  searchTerm: string;
}

const EmptyState: React.FC<Props> = ({ searchTerm }) => {
  return (
    <EmptyStateContainer>
      <EmptyStateSVG src={searchEmptyState} alt="emptyState" />
      <EmptyStateText>
        No results found for <Highlight>“{searchTerm}”</Highlight>. Try checking
        your spelling or using different keywords.
      </EmptyStateText>
    </EmptyStateContainer>
  );
};

export default EmptyState;
