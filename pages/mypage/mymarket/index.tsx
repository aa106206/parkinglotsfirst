import { WithAuth } from "../../../src/commons/withAuth";
import MyMarketContainer from "../../../src/components/units/Mypage/myMarket/myMarket.container";
import MypageContainer from "../../../src/components/units/Mypage/MypageNavigation/Mypage.container";

export function MyPageMyMarket() {
  return (
    <div style={{ width: "1200px", margin: "auto", display: "flex" }}>
      <MypageContainer />
      <MyMarketContainer />
    </div>
  );
}

export default WithAuth(MyPageMyMarket);
