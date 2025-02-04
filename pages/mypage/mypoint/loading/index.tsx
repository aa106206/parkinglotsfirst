import MypageContainer from "../../../../src/components/units/Mypage/MypageNavigation/Mypage.container";
import MyPointLoadingContainer from "../../../../src/components/units/Mypage/myPoint/loading/myPointLoading.container";

export default function MyPageMyPoint() {
  return (
    <div style={{ width: "1200px", margin: "auto", display: "flex" }}>
      <MypageContainer />;
      <MyPointLoadingContainer />
    </div>
  );
}
