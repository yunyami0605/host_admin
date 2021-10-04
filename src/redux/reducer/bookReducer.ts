/* eslint-disable no-duplicate-case */
import { type_book_data } from "type/book";
import {
  DELETE_CHAPTER,
  DELETE_CHAPTER_ERR,
  DELETE_CHAPTER_SUC,
  GET_BOOK_DATA,
  GET_BOOK_DATA_ERR,
  GET_BOOK_DATA_SUC,
  GET_BOOK_LIST,
  GET_BOOK_LIST_ERR,
  GET_BOOK_LIST_SUC,
  INIT_CRUD_CHAPTER,
  POST_CHAPTER,
  POST_CHAPTER_ERR,
  POST_CHAPTER_SUC,
  SET_SELETED_BOOK,
} from "../constant";

export interface IBookState {
  bookListState: {
    state: number;
    errMsg: string;
    list: type_book_data[];
  };

  bookState: {
    state: number;
    errMsg: string;
    data: type_book_data | null;
  };

  crudBookChapter: {
    state: number;
    errMsg: string;
    sucMsg: string;
  };

  selectedBookIndex: number;
}

const initState: IBookState = {
  bookListState: {
    state: -1,
    errMsg: "",
    list: [],
  },

  bookState: {
    state: -1,
    errMsg: "",
    data: null,
  },

  selectedBookIndex: 0,

  crudBookChapter: {
    state: -1,
    errMsg: "",
    sucMsg: "",
  },
};

export default function bookReducer(
  state = initState,
  action: { type: string; data?: any }
) {
  switch (action.type) {
    // @ 책 리스트 조회
    case GET_BOOK_LIST:
      return {
        ...state,
        bookListState: { ...state.bookListState, state: 0, errMsg: "" },
      };

    case GET_BOOK_LIST_SUC:
    case GET_BOOK_LIST_ERR:
      return {
        ...state,
        bookListState: {
          ...action.data,
        },
      };

    case SET_SELETED_BOOK:
      return {
        ...state,
        selectedBookIndex: action.data,
      };

    // @ 책 데이터 조회
    case GET_BOOK_DATA:
      return {
        ...state,
        bookState: { ...state.bookState, state: 0, errMsg: "" },
      };

    case GET_BOOK_DATA_SUC:
    case GET_BOOK_DATA_ERR:
      console.log(action.data);
      return {
        ...state,
        bookState: {
          ...state.bookState,
          data: {
            ...action.data,
          },
        },
      };

    case POST_CHAPTER:
      return {
        ...state,
        crudBookChapter: {
          ...initState.crudBookChapter,
          state: 0,
        },
      };

    case POST_CHAPTER_SUC:
    case POST_CHAPTER_ERR:
      return {
        ...state,
        crudBookChapter: {
          ...action.data,
        },
      };

    case INIT_CRUD_CHAPTER:
      return {
        ...state,
        crudBookChapter: {
          ...initState.crudBookChapter,
        },
      };

    case DELETE_CHAPTER:
      return {
        ...state,
        crudBookChapter: {
          ...initState.crudBookChapter,
          state: 0,
        },
      };

    case DELETE_CHAPTER_SUC:
    case DELETE_CHAPTER_ERR:
      return {
        ...state,
        crudBookChapter: {
          ...action.data,
        },
      };

    default:
      return state;
  }
}

export type bookReducerType = ReturnType<typeof bookReducer>;
