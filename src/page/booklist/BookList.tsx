import React from "react";
import DefaultLayout from "../../defaultComponents/layout/DefaultLayout";
import "./BookList.scss";

interface IProps {}

/*
 * @def : BookList
 * @param
 * - :
 * - :
 */
function BookList() {
  return (
    <DefaultLayout title="책 목록">
      <section className="center">책 목록</section>
    </DefaultLayout>
  );
}
export default BookList;
