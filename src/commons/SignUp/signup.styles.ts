import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 360px;
  height: 350px;
  display: flex;
  flex-direction: column;
  margin: auto;
  border: 1px solid #eee;
  box-shadow: 0 0 3px #eee;
  margin: 80px auto;
  padding: 30px;
`;

export const WordWrapper = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid gray;
  margin-bottom: 35px;
`;

export const LoginWord = styled.div`
  width: 100%;
  height: 30px;
  margin: 5px 0px 15px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #585f69;
  font-size: 24px;
`;

export const Id = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid rgb(204, 204, 204);
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;

export const IdImage = styled.div`
  width: 20%;
  height: 100%;
  border-right: 1px solid rgb(204, 204, 204);
  font-size: 10px;
  color: rgb(119, 119, 119);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IdInput = styled.input`
  width: 85%;
  height: 100%;
  box-sizing: border-box;
  border: rgb(204, 204, 204);
  padding-left: 10px;
  outline: none;
  /* background-color: rgb(232, 240, 254); */
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: none;
  background: #166caa;
  font-size: 15px;
  color: white;
  cursor: pointer;
  margin-bottom: 20px;
`;
