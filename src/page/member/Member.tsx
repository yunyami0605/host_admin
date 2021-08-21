import React from "react";
import DefaultLayout from "../../defaultComponents/layout/DefaultLayout";
import "./Member.scss";

interface IProps {}

/*
 * @def : Member
 * @param
 * - :
 * - :
 */
function Member() {
  return (
    <DefaultLayout title="회원관리">
      <section className="center">{"회원 관리 목록"}</section>
    </DefaultLayout>
  );
}
export default Member;
