import { ChangeEvent } from "react";
import * as S from "./searchbar3.styles";

interface ISearchBar3 {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar3(props: ISearchBar3) {
  return (
    <S.SearchBar>
      <S.SearchIcon src="../../../images/search.png" />
      <S.SearchInput
        placeholder="필요한 내용을 검색해주세요."
        onChange={props.onChangeInput}
      />
    </S.SearchBar>
  );
}
