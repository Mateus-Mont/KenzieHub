
import {
  StyledModalConteiner,
  StyledModalContent,
  StyledHeaderModal,
} from "./style";
import { FormAddTechs } from "./form";

export const Modal = ({ setModal }) => {
  function closeModal() {
    setModal(false);
  }

  return (
    <StyledModalConteiner>
      <StyledModalContent>
        <StyledHeaderModal>
          <h4>Cadastrar Tecnologia</h4>
          <button onClick={closeModal}>X</button>
        </StyledHeaderModal>
          <FormAddTechs setModal={setModal}/>
      </StyledModalContent>
    </StyledModalConteiner>
  );
};
