import { StyledContainerDatasUser } from "./style";
import { useParams } from "react-router-dom";

export const DatasDashBoard = ({user}) => {
  const  {name} = useParams()
  


  return (
    <>
      <StyledContainerDatasUser>
        <div>
          <h2>Olá, {name[0].toUpperCase() + name.substring(1)}</h2>
          <small>{user.course_module} </small>
        </div>
      </StyledContainerDatasUser>
    </>
  );
};
