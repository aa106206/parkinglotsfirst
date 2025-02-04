import MypageContainer from "../../../../src/components/units/Mypage/MypageNavigation/Mypage.container";
import MyPointBuyingContainer from "../../../../src/components/units/Mypage/myPoint/buying/myPointBuying.container";

export default function MyPageMyPoint() {
  return (
    <div style={{ width: "1200px", margin: "auto", display: "flex" }}>
      <MypageContainer />;
      <MyPointBuyingContainer />
    </div>
  );
}
