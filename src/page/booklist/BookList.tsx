/* eslint-disable react-hooks/exhaustive-deps */
import { setCookie } from "defaultComponents/tool";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { GET_BOOK_DATA, GET_BOOK_LIST, SET_SELETED_BOOK } from "redux/constant";
import { RootState } from "redux/reducer";
import { type_book_data } from "type/book";
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
  const dispatch = useDispatch();
  const history = useHistory();
  const { state, list } = useSelector(
    (_state: RootState) => _state.book.bookListState
  );

  console.log(list);

  const onSelectBook = (id: number) => {
    // setCookie("pg", `b${id}`, 365, `test`);

    dispatch({ type: SET_SELETED_BOOK, data: id });
    dispatch({ type: GET_BOOK_DATA, b_id: `b${id}` });
    history.push(`bookinfo/${id}`);
  };

  useEffect(() => {
    dispatch({ type: GET_BOOK_LIST });
  }, []);

  return (
    <DefaultLayout title="책 목록">
      <section className="booklist__page inner__layout center">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">id</th>
              <th scope="col">제목</th>
              <th scope="col">작가</th>
              <th scope="col">보기</th>
            </tr>
          </thead>

          <tbody>
            {list.map((val: type_book_data, i: number) => (
              <tr>
                <td>{i}</td>
                <td>{val.b_id}</td>
                <td>{val.title}</td>
                <td>{val.name}</td>
                <td>
                  <button
                    onClick={() => onSelectBook(val.b_id)}
                    type="button"
                    className="btn btn-outline-primary"
                  >
                    보기
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </DefaultLayout>
  );
}
export default BookList;
