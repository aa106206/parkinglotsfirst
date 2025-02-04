import MypageContainer from "../../../../src/components/units/Mypage/MypageNavigation/Mypage.container";
import MyPointSellingContainer from "../../../../src/components/units/Mypage/myPoint/selling/myPointSelling.container";

export default function MyPageMyPoint() {
  return (
    <div style={{ width: "1200px", margin: "auto", display: "flex" }}>
      <MypageContainer />;
      <MyPointSellingContainer />
    </div>
  );
}
