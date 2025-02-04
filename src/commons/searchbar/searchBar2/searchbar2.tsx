import { ChangeEvent } from "react";
import * as S from "./searchbar2.styles";

interface ISearchBar2 {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar2(props: ISearchBar2) {
  return (
    <S.SearchBar>
      <S.SearchIcon src="../../../images/search.png" />
      <S.SearchInput
        placeholder="제품을 검색해주세요."
        onChange={props.onChangeInput}
      />
    </S.SearchBar>
  );
}
