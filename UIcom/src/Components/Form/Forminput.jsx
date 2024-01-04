import style from "../../Components/Form/form.module.scss";
import { useState } from "react";

export const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMSG, onChange, id, ...inputProps } = props;
  
    const handleFocus = (e) => {
      setFocused(true);
    };
  
    return (
      <div className={style.formInputContainer}>
        <label>{label}</label>
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          focused={focused.toString()}
        />
        <span>{errorMSG}</span>
      </div>
    );
  };