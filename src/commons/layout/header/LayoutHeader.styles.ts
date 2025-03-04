import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 50px auto;
`;

export const HomeIcon = styled.img`
  width: 200px;
  cursor: pointer;
`;

export const LogInOut = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogIn = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  padding: 10px 16px;
  font-size: 16px;
  font-weight: 700;
  margin-right: 10px;
  cursor: pointer;
  :hover {
    background-color: #ff9797;
  }
`;

export const SignUp = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  padding: 10px 16px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  :hover {
    background-color: #ff9797;
  }
`;

export const LogInSuccess = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LoginProfile = styled.img`
  width: 48px;
  height: 48px;
`;

export const LoginDetail = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
