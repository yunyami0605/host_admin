import Accordion from "defaultComponents/accordion/Accordion";
import Dropbox from "defaultComponents/dropbox/Dropbox";
import ModalInput from "defaultComponents/input/ModalInput";
import ModalLayout from "defaultComponents/modal/ModalLayout";
import React, { useState } from "react";
import { type_page_data } from "type/book";
import "./BookInfoModal.scss";

interface IProps {
  onCreateChapter: (title: string, data: type_page_data[]) => void;
}

/*
 * @def : BookInfoModal
 * @param
 * - :
 * - :
 */
function BookInfoModal({ onCreateChapter }: IProps) {
  const onSubmit = () => {
    if (!chapterTitle.length) return alert("챕터 제목을 입력해주세요.");
    onCreateChapter(chapterTitle, pageList);
  };
  const onClose = () => {};

  const [chapterTitle, setChapterTitle] = useState("");

  const [pageTitleList, setPageTitleList] = useState<string[]>([]);

  const [pageList, setPageList] = useState<type_page_data[]>([]);

  const [pageData, setPageData] = useState({
    type: 1,
    storyTxt: "",
  });

  const list = [
    { text: "글", value: "1" },
    { text: "글+그림", value: "2" },
    { text: "글+선택지", value: "3" },
  ];

  const onAddPage = (pageNum: number) => {
    setPageTitleList([...pageTitleList, `PAGE ${pageNum + 1}`]);
    /*
      imgSrc?: string;
      p_id: number;
      storyTxt: string;
      type: number;
      selection?: type_selection_item[];
    */
    setPageList([
      ...pageList,
      {
        ...pageData,
        imgSrc: "",
        p_id: pageList.length + 1,
        // buttonTxt: `PAGE ${pageNum.toString()}`,
        // selection:[],
        // content: [pageData.type.toString(), pageData.storyTxt],
      },
    ]);
  };

  return (
    <ModalLayout onSubmit={onSubmit} onClose={onClose}>
      <section>
        <ModalInput
          placeholder={"챕터 제목을 입력해주세요."}
          onChange={(e: any) => setChapterTitle(e.target.value)}
          value={chapterTitle}
        />

        <hr />

        <Dropbox
          list={list}
          onChange={(val) => setPageData({ ...pageData, type: Number(val) })}
          value={pageData.type.toString()}
          label="페이지 타입:"
        />

        <ModalInput
          placeholder={"추가할 페이지 내용을 입력해주세요."}
          onChange={(e: any) =>
            setPageData({ ...pageData, storyTxt: e.target.value })
          }
          value={pageData.storyTxt}
          isTextarea
          inputStyle={{ height: 120 }}
        />
        <button
          onClick={() => onAddPage(pageList.length)}
          className="btn btn-primary"
          type="button"
        >
          페이지 추가하기
        </button>

        <hr />

        <Accordion
          titleList={pageTitleList}
          contentList={pageList}
          keyList={["type", "storyTxt"]}
        />
      </section>
    </ModalLayout>
  );
}
export default BookInfoModal;
