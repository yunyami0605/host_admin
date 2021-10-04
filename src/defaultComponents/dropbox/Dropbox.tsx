import React from "react";
import "./Dropbox.scss";

interface IProps {
  list: { text: string; value: string }[];
  onChange: (val: string) => void;
  value: string;
  label?: string;
}

/*
 * @def : Dropbox
 * @param
 * - :
 * - :
 */
function Dropbox({ label, list, onChange, value }: IProps) {
  return (
    <div className="dropdown">
      <span>{label}</span>
      <button
        className="btn btn-success dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {value}
      </button>

      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {list.map((val, i) => (
          <button
            key={i}
            onClick={() => onChange(val.value)}
            className="dropdown-item"
          >
            {val.text}
          </button>
        ))}
      </div>
    </div>
  );
}
export default Dropbox;
