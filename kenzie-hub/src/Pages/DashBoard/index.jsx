import { DatasDashBoard } from "./DatasDashBoard";
import { HeaderHome } from "./Header";
import { StyledContainerHeader,} from "./style";

export const DashBoard = () => {
  return (
    <>
      <StyledContainerHeader>
        <HeaderHome />
      </StyledContainerHeader>
      <DatasDashBoard />
    </>
  );
};
