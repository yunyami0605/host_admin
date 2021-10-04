import { call, put, takeLatest } from "typed-redux-saga";
import { apiCall } from "../api";
import {
  DELETE_BOOK_DATA_ERR,
  DELETE_BOOK_DATA_SUC,
  DELETE_CHAPTER,
  DELETE_CHAPTER_ERR,
  DELETE_CHAPTER_SUC,
  GET_BOOK_DATA,
  GET_BOOK_DATA_ERR,
  GET_BOOK_DATA_SUC,
  GET_BOOK_LIST,
  GET_BOOK_LIST_ERR,
  GET_BOOK_LIST_SUC,
  POST_CHAPTER,
  POST_CHAPTER_ERR,
  POST_CHAPTER_SUC,
} from "../constant";

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
import {
  deleteApiFirebase,
  getApiFirebase,
  setApiFirebase,
} from "redux/api/firebaseApi";

// @책 리스트 가져오기 api
function* getBookList(action: { type: string }) {
  const res = yield* call(getApiFirebase, {
    url: "book_api",
  });
  console.log("res1 : ");
  console.log(res);

  if (res.status === 200) {
    const data = Object.values(res.data as object);
    yield* put({
      type: GET_BOOK_LIST_SUC,
      data: { state: 1, list: data },
    });
  } else {
    yield* put({
      type: GET_BOOK_LIST_ERR,
      data: { state: 2 },
    });
  }
}

// @책 리스트 가져오기 api
function* getBookData(action: { type: string; b_id: string }) {
  const res = yield* call(getApiFirebase, {
    url: `book_api/${action.b_id}`,
  });
  console.log("res1 : ");
  console.log(res);

  if (res.status === 200) {
    yield* put({
      type: GET_BOOK_DATA_SUC,
      data: {
        ...res.data,
        state: 1,
      },
    });
  } else {
    yield* put({
      type: GET_BOOK_DATA_ERR,
      data: { state: 2 },
    });
  }
}

// @ add chapter on book
function* postBookChapter(action: { type: string; b_id: string; data: any }) {
  console.log(`book_api/${action.b_id}/chapterList`);
  const res = yield* call(setApiFirebase, {
    url: `book_api/${action.b_id}/chapterList`,
    data: action.data,
  });

  console.log("post chapter res : ");
  console.log(res);
  if (res.status === 200) {
    yield* put({
      type: POST_CHAPTER_SUC,
      data: {
        state: 1,
      },
    });
  } else {
    yield* put({
      type: POST_CHAPTER_ERR,
      data: { state: 2 },
    });
  }
}

function* deleteBookChapter(action: {
  type: string;
  b_id: string;
  data: any;
  index: number;
}) {
  const tmp = action.data.filter((val: any, i: number) => i !== action.index);
  const res = yield* call(deleteApiFirebase, {
    url: `book_api/${action.b_id}`,
    target_node: "/chapterList",
    data: tmp,
  });

  if (res.status === 200) {
    yield* put({
      type: DELETE_CHAPTER_SUC,
      data: {
        state: 1,
      },
    });
  } else {
    yield* put({
      type: DELETE_CHAPTER_ERR,
      data: { state: 2 },
    });
  }
}

export function* bookSaga() {
  yield* takeLatest(GET_BOOK_LIST, getBookList);

  yield* takeLatest(POST_CHAPTER, postBookChapter);
  yield* takeLatest(DELETE_CHAPTER, deleteBookChapter);

  yield* takeLatest(GET_BOOK_DATA, getBookData);
}
