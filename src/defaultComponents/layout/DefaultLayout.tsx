import React, { useState } from "react";
import SideMenu from "../menu/SideMenu";
import SideMenuBtn from "../menu/SideMenuBtn";
import "./DefaultLayout.scss";

interface IProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

/*
 * @def : DefaultLayout
 * @param
 * - :
 * - :
 */
function DefaultLayout({ children, title }: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const onClickMenuOpen = () => {
    setIsOpen(true);
  };

  const onClickMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <section
      className={"d-flex flex-column align-items-center default__layout"}
    >
      <SideMenu menuHandler={onClickMenuClose} isOpen={isOpen} />

      {!isOpen && <SideMenuBtn menuHandler={onClickMenuOpen} />}

      <header>{title}</header>
      {children}
    </section>
  );
}
export default DefaultLayout;
