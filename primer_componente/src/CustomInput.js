function CustomInput({label, disabled, typeInput}) {
    return (
      <>
        <label htmlFor="">{label}</label>
        <input type={typeInput} disabled={disabled} />
      </>
    );
  }
  
  
  export default CustomInput;