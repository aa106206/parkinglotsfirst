import { WithAuth } from "../../src/commons/withAuth";
import UsedMarketContainer from "../../src/components/units/usedMarket/list/usedMarketList.container";

function Market() {
  return <UsedMarketContainer />;
}

export default WithAuth(Market);
