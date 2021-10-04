/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_CHAPTER,
  GET_BOOK_DATA,
  GET_BOOK_LIST,
  INIT_CRUD_CHAPTER,
  POST_CHAPTER,
} from "redux/constant";
import { RootState } from "redux/reducer";
import { type_book_data, type_chapter_data, type_page_data } from "type/book";
import DefaultLayout from "../../defaultComponents/layout/DefaultLayout";
import "./BookInfo.scss";

import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  child,
  update,
  remove,
} from "firebase/database";
import BookInfoModal from "./component/BookInfoModal";
import { setCookie } from "defaultComponents/tool";
import { useParams } from "react-router";

interface IProps {}
/*
 * @def : BookInfo
 * @param
 */
function BookInfo() {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const param = useParams() as { id?: string };
  const { data } = useSelector(
    (_state: RootState) => _state.book.bookState
  ) as { state: number; data: type_book_data };

  const { state } = useSelector(
    (_state: RootState) => _state.book.crudBookChapter
  );

  const chapterList = data?.chapterList ? Object.values(data.chapterList) : [];

  // @def : create new chapter
  const onCreateChapter = async (title: string, _data: type_page_data[]) => {
    if (state === 0) return alert("챕터 등록 중입니다.");
    if (!title.length) alert("챕터 제목을 입력해주세요");

    dispatch({
      type: POST_CHAPTER,
      b_id: `b${param.id}`,
      data: [
        ...chapterList,
        {
          c_id: chapterList.length + 1,
          data: _data,
          txt: title,
        },
      ],
    });
  };

  const onRemoveChapter = async (index: number) => {
    dispatch({
      type: DELETE_CHAPTER,
      b_id: `b${param.id}`,
      data: [...chapterList],
      index,
    });
    // const db = getDatabase();
    // const tmp = data.chapterList.filter((val: any, i: number) => i !== index);
    // await update(ref(db, `book_api/${list[index].b_id}/chapterList`), tmp);
  };

  const onUpdateDB = async () => {
    const db = getDatabase();

    // A post entry.
    const postData = {
      name: "test1",
      email: "test3@naver.com",
      profile_picture: "test4.png",
    };

    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates: any = {};
    updates["/book_api/b3"] = postData;

    await update(ref(db), updates);
  };

  useEffect(() => {
    dispatch({ type: GET_BOOK_LIST });
    dispatch({ type: GET_BOOK_DATA, b_id: `b${param.id}` });
  }, []);

  useEffect(() => {
    if (state === 1) {
      dispatch({ type: GET_BOOK_LIST });
      dispatch({ type: GET_BOOK_DATA, b_id: `b${param.id}` });
      dispatch({ type: INIT_CRUD_CHAPTER });
    } else if (state === 2) {
      dispatch({ type: INIT_CRUD_CHAPTER });
      alert("챕터 DB 조회 중, 에러가 발생했습니다.");
    }
  }, [state]);

  return (
    <DefaultLayout title="책 목록">
      <section className="bookinfo__page inner__layout center">
        <BookInfoModal onCreateChapter={onCreateChapter} />

        <div>• 책 제목</div>
        <p>{data?.title || ""}</p>
        <div>• 작가명</div>
        <p>{data?.name || ""}</p>

        <div>• 설명</div>
        <p>{data?.description || ""}</p>

        <div className="chapterlist__line">
          • 챕터 리스트
          <button
            // onClick={() => setOpenModal(true)}
            data-toggle="modal"
            data-target="#exampleModalLong"
            type="button"
            className="btn btn-outline-success"
          >
            챕터 추가하기
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">id</th>
              <th scope="col">챕터 제목</th>
              <th scope="col">보기</th>
              <th scope="col">수정</th>
              <th scope="col">삭제</th>
            </tr>
          </thead>

          <tbody>
            {chapterList.map((val: type_chapter_data, i: number) => (
              <tr key={i}>
                <td>{i}</td>
                <td>{val.c_id}</td>
                <td>{val.txt}</td>
                <td>
                  <button
                    // onClick={() => onRemoveDB()}
                    type="button"
                    className="btn btn-outline-primary"
                  >
                    보기
                  </button>
                </td>
                <td>
                  <button
                    // onClick={() => onRemoveDB()}
                    type="button"
                    className="btn btn-outline-primary"
                  >
                    수정
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => onRemoveChapter(i)}
                    type="button"
                    className="btn btn-danger"
                  >
                    삭제
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
export default BookInfo;
