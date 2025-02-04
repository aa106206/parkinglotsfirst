import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  margin-left: 150px;
`;

export const Board = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
`;

export const Info = styled.div`
  width: 996px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 120px;
`;

export const Profile = styled.img`
  width: 56px;
  height: 56px;
`;

export const Writer_Date = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Writer = styled.div`
  width: 100%;
  height: 36px;
  font-size: 24px;
  font-weight: 500;
`;

export const Date = styled.div`
  width: 100%;
  height: 24px;
  font-size: 16px;
  font-weight: 400;
  color: #828282;
`;

export const SplitLine = styled.div`
  width: 996px;
  border-top: 1px solid #bdbdbd;
  margin-top: 20px;
`;

export const Title = styled.div`
  width: 996px;
  margin-top: 80px;
  font-size: 36px;
  font-weight: 700;
`;

export const Contents = styled.div`
  margin: 20px 0px;
  width: 996px;
  height: 640px;
`;

export const SelectLine = styled.div`
  display: flex;
  flex-direction: row;
  align-center: center;
  margin-top: 100px;
`;

export const Btn = styled.button`
  width: 180px;
  height: 45px;
  font-size: 16px;
  font-weight: 500;
  background: white;
  border: 1px solid gray;
  padding: 14px 60px;
  margin: 0px 10px;
  cursor: pointer;
`;
