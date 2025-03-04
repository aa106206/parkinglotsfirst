import Upload2Container from "../../../commons/uploads/upload2/upload2.container";
import * as S from "./ItemWrite.styles";
import { v4 as uuidv4 } from "uuid";
import { IItemWritePresenter } from "./ItemWrite.types";

export default function ItemWritePresenter(props: IItemWritePresenter) {
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <S.Wrap1>상품 등록하기</S.Wrap1>
      <S.Wrap2>
        <S.Wrap2Input>
          <S.Wrap2Input1>상품명</S.Wrap2Input1>
          <S.Wrap2Input2
            placeholder="상품명을 작성해주세요"
            {...props.register("name")}
          />
          <div style={{ color: "red" }}>
            {props.formState.errors.name?.message}
          </div>
        </S.Wrap2Input>
        <S.Wrap2Input>
          <S.Wrap2Input1>한줄요약</S.Wrap2Input1>
          <S.Wrap2Input2
            placeholder="상품설명을 요약해주세요"
            {...props.register("remarks")}
          />
          <div style={{ color: "red" }}>
            {props.formState.errors.remarks?.message}
          </div>
        </S.Wrap2Input>
        <S.Wrap2WebEditor>
          <S.Wrap2WebEditor1>상품설명</S.Wrap2WebEditor1>
          <S.Wrap2WebEditor2
            placeholder="상품을 설명해주세요"
            onChange={props.onChangeContents}
          />
          <div
            style={{
              color: "red",
            }}
          >
            {props.formState.errors.contents?.message}
          </div>
        </S.Wrap2WebEditor>
        <S.Wrap2Input>
          <S.Wrap2Input1>판매가격</S.Wrap2Input1>
          <S.Wrap2Input2
            type="text"
            placeholder="판매가격을 입력해주세요"
            {...props.register("price", {
              onChange: (e) => {
                const onlyNumbers = e.target.value.replace(/[^0-9]/g, ""); // 숫자만 남기기
                props.setValue("price", onlyNumbers); // 값 업데이트
              },
            })}
          />
          <div style={{ color: "red" }}>
            {props.formState.errors.price?.message}
          </div>
        </S.Wrap2Input>
        <S.Wrap2Input>
          <S.Wrap2Input1>태그입력</S.Wrap2Input1>
          <S.Wrap2Input2
            placeholder="#태그 #태그 #태그"
            {...props.register("tags")}
          />
          <div style={{ color: "red" }}>
            {props.formState.errors.tags?.message}
          </div>
        </S.Wrap2Input>
        <S.Wrap2Location>
          <S.Wrap2LocationMap>
            <S.Wrap2LocationMap1>거래위치</S.Wrap2LocationMap1>
            <S.Wrap2LocationMap2>
              <div id="map" style={{ width: "384px", height: "252px" }}></div>
            </S.Wrap2LocationMap2>
          </S.Wrap2LocationMap>
          <S.Wrap2LocationRight>
            <S.Wrap2LocationRightGPS>
              <S.Wrap2LocationRightGPS1>GPS</S.Wrap2LocationRightGPS1>
              <S.Wrap2LocationRightGPS2>
                <S.Wrap2LocationRightGPS2Block
                  readOnly
                  placeholder="위도(LAT)"
                  value={props.lat}
                />
                <S.Wrap2LocationRightGPS2Img src="/images/location_Tooltip.png" />
                <S.Wrap2LocationRightGPS2Block
                  readOnly
                  placeholder="경도(LNG)"
                  value={props.lng}
                />
              </S.Wrap2LocationRightGPS2>
            </S.Wrap2LocationRightGPS>
            <S.Wrap2LocationRightAddress>
              <S.Wrap2LocationRightAddress1>
                주소 (지도의 마커를 이동시켜 위치를 입력해주세요)
              </S.Wrap2LocationRightAddress1>
              <S.Wrap2LocationRightAddress2 readOnly value={props.address} />
              <S.Wrap2LocationRightAddress2
                placeholder="상세주소를 작성해주세요"
                {...props.register("addressDetail")}
              />
              <div style={{ color: "red" }}>
                {props.formState.errors.addressDetail?.message}
              </div>
            </S.Wrap2LocationRightAddress>
          </S.Wrap2LocationRight>
        </S.Wrap2Location>

        <S.Wrap2Upload>
          <S.Wrap2Upload1>사진 첨부</S.Wrap2Upload1>
          <S.Wrap2Upload2>
            {props.itemImageUrls.map((el, index) => (
              <Upload2Container
                key={uuidv4()}
                imageUrl={el}
                index={index}
                onChangeImageUrls={props.onChangeImageUrls}
              />
            ))}
          </S.Wrap2Upload2>
        </S.Wrap2Upload>
        <S.Wrap2MainImg>
          <S.Wrap2MainImg1>메인 사진 설정</S.Wrap2MainImg1>
          <S.Wrap2MainImg2>
            <S.Wrap2MainImg2Btn type="radio" name="group" id="img1" />
            <S.Wrap2MainImg2BtnLabel htmlFor="img1">
              사진 1
            </S.Wrap2MainImg2BtnLabel>
            <S.Wrap2MainImg2Btn type="radio" name="group" id="img2" />
            <S.Wrap2MainImg2BtnLabel htmlFor="img2">
              사진 2
            </S.Wrap2MainImg2BtnLabel>
          </S.Wrap2MainImg2>
        </S.Wrap2MainImg>
      </S.Wrap2>
      <S.Wrap3>
        <S.Wrap3Btn
          style={{
            backgroundColor: props.formState.isValid ? "#ff9797" : "#bdbdbd",
          }}
        >
          등록하기
        </S.Wrap3Btn>
      </S.Wrap3>
    </S.Wrapper>
  );
}
