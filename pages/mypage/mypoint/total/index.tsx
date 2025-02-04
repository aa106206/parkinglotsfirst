import MypageContainer from "../../../../src/components/units/Mypage/MypageNavigation/Mypage.container";
import MyPointTotalContainer from "../../../../src/components/units/Mypage/myPoint/total/myPointTotal.container";

export default function MyPageMyPoint() {
  return (
    <div style={{ width: "1200px", margin: "auto", display: "flex" }}>
      <MypageContainer />;
      <MyPointTotalContainer />
    </div>
  );
}
