import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f65353;
  margin-top: 40px;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
`;

export const Option = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin: 0px 20px;

  cursor: pointer;
  :hover {
    color: #ff9797;
  }
`;

// OptionSplit 은 섹션18 포트폴리오 리뷰에서 리팩토링하면서 그냥 뺐음
// export const OptionSplit = styled.div`
//   height: 20px;
//   border-right: solid 1px #ffffff;
//   margin: 0px 40px;
// `;
