import { v4 as uuidv4 } from "uuid";
import {
  Wrapper,
  HeadBlock,
  Check,
  Writer_Pw,
  BodyRow,
  BodyBlock,
  BodyBlockTitle,
  BodyBlockBlank,
  BodyBlockBlankContent,
  BodyBlockAddress,
  BodyBlockAddressFirst,
  BodyBlockBlankAddress,
  BodyBlockBlankAddressBtn,
  BodyBlockUploadLine,
  RadioButton,
  RadioButtonLabel,
  RadioBtnLine,
  EndBlock,
  RegisterBtn,
} from "./BoardWrite.styles";
import { IBoardWritePresenterProps } from "./BoardWrite.types";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import Upload1Container from "../../../commons/uploads/upload1/upload1.container";

export default function BoardWritePresenter(props: IBoardWritePresenterProps) {
  return (
    <>
      {props.isModalOpen && (
        <Modal open={props.isModalOpen}>
          <DaumPostcodeEmbed onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}
      <Wrapper>
        <HeadBlock>{props.isEdit ? "게시물 수정" : "게시물 등록"}</HeadBlock>
        <BodyRow>
          <Writer_Pw>
            <BodyBlockTitle>작성자</BodyBlockTitle>
            <BodyBlockBlank
              placeholder="이름을 적어주세요."
              type="text"
              onChange={props.changeWriterInput}
              defaultValue={props.data?.fetchBoard?.writer ?? ""}
              readOnly={Boolean(props.data?.fetchBoard.writer)}
            ></BodyBlockBlank>
            <Check>{props.writerError}</Check>
          </Writer_Pw>
          <Writer_Pw>
            <BodyBlockTitle>비밀번호</BodyBlockTitle>
            <BodyBlockBlank
              placeholder="비밀번호를 입력해주세요."
              type="password"
              onChange={props.changePasswordInput}
            ></BodyBlockBlank>
            <Check>{props.passwordError}</Check>
          </Writer_Pw>
        </BodyRow>
        <BodyBlock>
          <BodyBlockTitle>제목</BodyBlockTitle>
          <BodyBlockBlank
            placeholder="제목을 작성해주세요."
            onChange={props.changeTitleInput}
            defaultValue={props.data?.fetchBoard?.title}
          ></BodyBlockBlank>
          <Check>{props.titleError}</Check>
        </BodyBlock>
        <BodyBlock>
          <BodyBlockTitle>내용</BodyBlockTitle>
          <BodyBlockBlankContent
            placeholder="내용을 작성해주세요."
            onChange={props.changeContentInput}
            defaultValue={props.data?.fetchBoard?.contents}
          ></BodyBlockBlankContent>
          <Check>{props.contentError}</Check>
        </BodyBlock>
        <BodyBlock>
          <BodyBlockTitle>주소</BodyBlockTitle>
          <BodyBlockAddress>
            <BodyBlockAddressFirst>
              <BodyBlockBlankAddress
                readOnly
                defaultValue={
                  props.zipcode
                    ? props.zipcode
                    : (props.data?.fetchBoard.boardAddress?.zipcode ?? "")
                }
                placeholder="07250"
              ></BodyBlockBlankAddress>
              <BodyBlockBlankAddressBtn onClick={props.onToggleModal}>
                우편번호 검색
              </BodyBlockBlankAddressBtn>
            </BodyBlockAddressFirst>
            <BodyBlockBlank
              readOnly
              defaultValue={
                props.address
                  ? props.address
                  : (props.data?.fetchBoard.boardAddress?.address ?? "")
              }
            ></BodyBlockBlank>
            <BodyBlockBlank
              onChange={props.onChangeDetailAddress}
              defaultValue={
                props.data?.fetchBoard?.boardAddress?.addressDetail ?? ""
              }
            ></BodyBlockBlank>
          </BodyBlockAddress>
        </BodyBlock>
        <BodyBlock>
          <BodyBlockTitle>유튜브</BodyBlockTitle>
          <BodyBlockBlank
            placeholder="링크를 복사해주세요"
            onChange={props.onChangeYoutubeUrl}
            defaultValue={props.data?.fetchBoard?.youtubeUrl ?? ""}
          ></BodyBlockBlank>
        </BodyBlock>
        <BodyBlock>
          <BodyBlockTitle>사진 첨부</BodyBlockTitle>
          {/* <BodyBlockUploadLine>
            <input
              style={{ display: "none" }}
              ref={props.fileRef1}
              type="file"
              onChange={props.onChangeFile1}
            ></input>
            <input
              style={{ display: "none" }}
              ref={props.fileRef2}
              type="file"
              onChange={props.onChangeFile2}
            ></input>
            <input
              style={{ display: "none" }}
              ref={props.fileRef3}
              type="file"
              onChange={props.onChangeFile3}
            ></input>
            <BodyBlockUpload onClick={props.onClickfileRef1}>
              {props.imageUrl1 === "" ? (
                "+"
              ) : (
                <Image
                  src={`https://storage.googleapis.com/${props.imageUrl1}`}
                />
              )}
            </BodyBlockUpload>
            <BodyBlockUpload onClick={props.onClickfileRef2}>
              {props.imageUrl2 === "" ? (
                "+"
              ) : (
                <Image
                  src={`https://storage.googleapis.com/${props.imageUrl2}`}
                />
              )}
            </BodyBlockUpload>
            <BodyBlockUpload onClick={props.onClickfileRef3}>
              {props.imageUrl3 === "" ? (
                "+"
              ) : (
                <Image
                  src={`https://storage.googleapis.com/${props.imageUrl3}`}
                />
              )}
            </BodyBlockUpload>
          </BodyBlockUploadLine> */}
          <BodyBlockUploadLine>
            {props.imageUrls.map((el, index) => (
              <Upload1Container
                key={uuidv4()}
                imageUrl={el}
                index={index}
                onChangeImageUrls={props.onChangeImageUrls}
                // data={props.data?.fetchBoard?.images}
              />
            ))}
          </BodyBlockUploadLine>
        </BodyBlock>
        <BodyBlock>
          <BodyBlockTitle>메인 설정</BodyBlockTitle>
          <RadioBtnLine>
            <RadioButton type="radio" name="group" id="youtube" />
            <RadioButtonLabel htmlFor="youtube">유튜브</RadioButtonLabel>
            <RadioButton type="radio" name="group" id="image" />
            <RadioButtonLabel htmlFor="image">사진</RadioButtonLabel>
          </RadioBtnLine>
        </BodyBlock>
        <EndBlock>
          <RegisterBtn
            onClick={props.isEdit ? props.onClickUpdate : props.register}
            isActive={props.isActive}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </RegisterBtn>
        </EndBlock>
      </Wrapper>
    </>
  );
}
