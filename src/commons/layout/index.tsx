import LayoutHeaderContainer from "./header/LayoutHeader.container";
import LayoutBannerContainer from "./banner/LayoutBanner.container";
import LayoutNavigationContainer from "./navigation/LayoutNavigation.container";

interface ILayout {
  children: JSX.Element;
}

export default function Layout(props: ILayout) {
  return (
    <>
      <LayoutHeaderContainer />
      <LayoutBannerContainer />
      <LayoutNavigationContainer />
      {props.children}
    </>
  );
}
