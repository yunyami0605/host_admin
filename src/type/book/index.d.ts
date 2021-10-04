// @ page data type in book
export type type_page_data = {
  imgSrc?: string;
  p_id: number;
  storyTxt: string;
  type: number;
  selection?: type_selection_item[];
};

// @ chapter data type in book
export type type_chapter_data = {
  c_id: number;
  data: type_page_data[];
  txt: string;
};

// @ book data type in book list
export type type_book_data = {
  b_id: number;
  chapterList: object;
  description: string;
  name: string;
  src: string;
  title: string;
};

export type type_selection_item = {
  keyword: string;
  txt: string;
  val: string;
};
