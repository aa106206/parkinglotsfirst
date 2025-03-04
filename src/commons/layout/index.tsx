import LayoutHeaderContainer from "./header/LayoutHeader.container";
import LayoutBannerContainer from "./banner/LayoutBanner.container";
import LayoutNavigationContainer from "./navigation/LayoutNavigation.container";
import LoadingContainer from "../loading/loading.container";
import { useRecoilState } from "recoil";
import { loadPage } from "../globalState";
import { ModalOverlay } from "../../components/units/usedMarket/list/usedMarketList.styles";

interface ILayout {
  children: JSX.Element;
}

export default function Layout(props: ILayout) {
  const [isModalOpen, setIsModalOpen] = useRecoilState(loadPage);

  return (
    <>
      <LayoutHeaderContainer />
      <LayoutBannerContainer />
      <LayoutNavigationContainer />
      {isModalOpen ? (
        <ModalOverlay>
          <LoadingContainer />
        </ModalOverlay>
      ) : (
        <></>
      )}
      {props.children}
    </>
  );
}
