import type { AppProps } from "next/app";
import ApolloSetting from "../src/commons/apollo";
import Layout from "../src/commons/layout";
import { RecoilRoot } from "recoil";
import { Global } from "@emotion/react";
import { useState } from "react";

export default function App({ Component }: AppProps): JSX.Element {
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
