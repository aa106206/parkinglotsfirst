import { ChangeEvent } from "react";
import * as S from "./searchbar1.styles";

interface ISearchBar1 {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar1(props: ISearchBar1) {
  return (
    <S.SearchBar>
      <S.SearchIcon src="../../../images/search.png" />
      <S.SearchInput
        placeholder="제목을 검색해주세요."
        onChange={props.onChangeInput}
      />
    </S.SearchBar>
  );
}
