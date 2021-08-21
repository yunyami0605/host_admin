import React, { useState } from "react";
import "./SideMenuBtn.scss";

interface IProps {
  menuHandler: () => void;
}

/*
 * @def : SideMenu
 * @param
 * - :
 * - :
 */
function SideMenuBtn({ menuHandler }: IProps) {
  return (
    <article className="sidemenu__btn">
      <button type="button" className="btn button" onClick={menuHandler}>
        메뉴
      </button>
    </article>
  );
}
export default SideMenuBtn;
