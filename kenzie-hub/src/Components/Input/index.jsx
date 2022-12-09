export const Input = ({ id, type, register,placeholder }) => {
  return (
    <fieldset>
      <input id={id} type={type} placeholder={placeholder} {...register} />
    </fieldset>
  )
}
