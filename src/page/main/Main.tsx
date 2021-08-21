import React from "react";
import DefaultLayout from "../../defaultComponents/layout/DefaultLayout";
import "./Main.scss";

interface IProps {}

/*
 * @def : Main
 * @param
 * - :
 * - :
 */
function Main() {
  return (
    <DefaultLayout title={"메인"}>
      <section>
        <div className={"center main__chart__container"}>
          일간 / 주간 / 월간 탭이 있는 차트 영역
        </div>
        <div className={"center main__info__container"}>
          회원수 / 트래픽 영역
        </div>
      </section>
    </DefaultLayout>
  );
}

export default Main;
