import { StyledAddWorks } from "./style";

export const AddWorks = ({ setModal }) => {
  function addTechnologie() {
    setModal(true)
  }

  return (
    <StyledAddWorks>
      <h4>Tecnologias</h4>
      <button onClick={addTechnologie}>+</button>
    </StyledAddWorks>
  );
};
