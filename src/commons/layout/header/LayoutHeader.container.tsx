import { useRouter } from "next/router";
import LayoutHeaderPresenter from "./LayoutHeader.presenter";
import { IsLogInState } from "../../globalState";
import { useRecoilState } from "recoil";

export default function LayoutHeaderContainer() {
  const router = useRouter();
  const [isLogIn, setIsLogIn] = useRecoilState(IsLogInState);

  const onClickHomeIcon = () => {
    router.push("/boards");
  };

  const onClickLogin = () => {
    router.push("/account/login");
  };

  const onClickSingUp = () => {
    router.push("/account/signup");
  };

  return (
    <LayoutHeaderPresenter
      onClickHomeIcon={onClickHomeIcon}
      onClickLogin={onClickLogin}
      onClickSingUp={onClickSingUp}
      isLogIn={isLogIn}
    />
  );
}
