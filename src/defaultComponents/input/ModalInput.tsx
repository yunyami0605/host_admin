import React, { CSSProperties } from "react";

interface IProps {
  label?: string;
  onChange: (e: any) => void;
  value: any;
  placeholder?: string;
  isTextarea?: boolean;
  inputStyle?: CSSProperties;
}

/*
 * @def : ModalInput
 * @param
 * - :
 * - :
 */
function ModalInput({
  isTextarea,
  label,
  onChange,
  value,
  placeholder,
  inputStyle,
}: IProps) {
  return (
    <div className="input-group mb-3">
      {label && (
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            {label}
          </span>
        </div>
      )}

      {isTextarea ? (
        <textarea
          className="form-control"
          placeholder={placeholder || ""}
          aria-label="With textarea"
          value={value}
          onChange={onChange}
          style={inputStyle}
        />
      ) : (
        <input
          value={value}
          onChange={onChange}
          type="text"
          className="form-control"
          placeholder={placeholder || ""}
          aria-label="Username"
          aria-describedby="basic-addon1"
          style={inputStyle}
        />
      )}
    </div>
  );
}
export default ModalInput;
