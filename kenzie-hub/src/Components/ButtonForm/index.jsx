export const ButtonForm = ({name,onClick}) => {
  return (
    <>
      <button onClick={onClick} type="submit">{name}</button>
    </>
  );
};
