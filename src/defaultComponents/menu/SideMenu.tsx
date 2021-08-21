import React from "react";
import { Link } from "react-router-dom";
import "./SideMenu.scss";

interface IProps {
  menuHandler: () => void;
  isOpen: boolean;
}

/*
 * @def : SideMenu
 * @param
 * - :
 * - :
 */
function SideMenu({ isOpen, menuHandler }: IProps) {
  const test = isOpen ? " active" : "";
  return (
    <article className={"center sidemenu__container" + test}>
      <button type="button" className="btn" onClick={menuHandler}>
        ✕
      </button>

      <ul>
        <li className={"center d-flex flex-column"}>
          <Link to="/">메인</Link>
          <Link to="/member">회원</Link>
          <Link to="/booklist">책 목록</Link>
        </li>
      </ul>
    </article>
  );
}
export default SideMenu;
