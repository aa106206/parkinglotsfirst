import * as S from "./openapi.styles";

interface IOpenApiPresenter {
  dog: string[];
}

export default function OpenApiPresenter(props: IOpenApiPresenter) {
  return (
    <S.Wrapper>
      {props.dog.map((el) => (
        <S.DogImage src={el} />
      ))}
    </S.Wrapper>
  );
}
