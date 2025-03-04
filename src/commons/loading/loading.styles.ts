import styled from "@emotion/styled";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 464px;
  height: 340px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  background-color: #ffffff;
  padding: 20px;
`;

export const ExitLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
`;

export const Exit = styled.img`
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: row-reverse;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    filter: contrast(0.2);
  }
`;

export const Image = styled.img`
  width: 80px;
  height: 60px;
`;

export const Text = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 30px 0px;
`;

export const LoadInput = styled.input`
  box-sizing: border-box;
  text-align: center;
  width: 70%;
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  padding: 0px 0px 7px 5px;
  font-size: 16px;
  font-weight: 400;
  color: black;
`;

interface ILoadBtn {
  money: number;
}

export const LoadBtn = styled.div`
  box-sizing: border-box;
  width: 70%;
  height: 52px;
  border-radius: 10px;
  background-color: ${(props: ILoadBtn) =>
    props.money === 0 ? "#BDBDBD;" : "#000000"};
  margin: 30px 0px 20px;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
