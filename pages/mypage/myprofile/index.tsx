import MypageContainer from "../../../src/components/units/Mypage/MypageNavigation/Mypage.container";
import MyProfileContainer from "../../../src/components/units/Mypage/myProfile/myProfile.container";

export default function Myprofile() {
  return (
    <div style={{ width: "1200px", margin: "auto", display: "flex" }}>
      <MypageContainer />;
      <MyProfileContainer />;
    </div>
  );
}
