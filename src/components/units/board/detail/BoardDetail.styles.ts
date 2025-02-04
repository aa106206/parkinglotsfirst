import styled from "@emotion/styled";
import ReactPlayer from "react-player/youtube";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 150px auto;
`;

export const Board = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  padding-bottom: 80px;
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

export const LinkTooltip = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 20px;
  cursor: pointer;
`;

export const LocationTooltip = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
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

export const Image = styled.img`
  width: 996px;
  height: 480px;
`;

export const Contents = styled.div`
  margin: 20px 0px;
  width: 996px;
  height: 640px;
`;

export const Youtube = styled(ReactPlayer)`
  width: 486px;
  height: 240px;
`;

export const LikeOrDislike = styled.div`
  width: 120px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 160px;
  /* border: 1px solid red; */
`;

export const LikeBlock = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  :hover {
    font-weight: 600;
  }
`;

export const LikeImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const LikeCount = styled.div`
  font-size: 18px;
  color: #ffd600;
`;

export const DislikeBlock = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  :hover {
    font-weight: 600;
  }
`;

export const DislikeImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const DislikeCount = styled.div`
  font-size: 18px;
`;

export const SelectLine = styled.div`
  display: flex;
  flex-direction: row;
  //align-center이라고 되어 있었음
  align-items: center;
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
  :hover {
    background-color: #ffd600;
  }
`;

export const CommandBoardSplitLine = styled.div`
  width: 1200px;
  border-top: 1px solid #bdbdbd;
  margin: 100px auto 40px;
`;
