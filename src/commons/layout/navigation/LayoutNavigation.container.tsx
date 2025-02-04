import { useRouter } from "next/router";
import { MouseEvent } from "react";
import LayoutNavigationPresenter from "./LayoutNavigation.presenter";
import { IsLogInState } from "../../globalState";
import { useRecoilValue } from "recoil";

export default function LayoutNavigationContainer() {
  const router = useRouter();
  const isLogIn = useRecoilValue(IsLogInState);

  const onClickOption = (event: MouseEvent<HTMLImageElement>) => {
    console.log(isLogIn);
    if (isLogIn === false) {
      router.push("/account/login");
    }
    router.push(event.currentTarget.id);
  };

  return <LayoutNavigationPresenter onClickOption={onClickOption} />;
}
