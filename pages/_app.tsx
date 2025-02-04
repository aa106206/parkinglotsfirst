import type { AppProps } from "next/app";
import ApolloSetting from "../src/commons/apollo";
import Layout from "../src/commons/layout";
import { RecoilRoot } from "recoil";
import { Global } from "@emotion/react";
import { useState } from "react";

export default function App({ Component }: AppProps): JSX.Element {
  // if (typeof window !== "undefined") {
  //   console.log("app");
  //   console.log(localStorage.getItem("recentlyViewed"));
  //   if (!localStorage.getItem("recentlyViewed")) {
  //     localStorage.setItem("recentlyViewed", "[]");
  //     console.log("app.tsx실행");
  //   }
  // }

  return (
    <div>
      <RecoilRoot>
        <ApolloSetting>
          <Layout>
            <Component />
          </Layout>
        </ApolloSetting>
      </RecoilRoot>
    </div>
  );
}
