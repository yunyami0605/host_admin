import React from "react";
import "./Accordion.scss";

interface IProps {
  titleList: string[];
  contentList: any[];
  keyList: string[];
}

/*
 * @def : Accordion
 * @param
 * - :
 * - :
 */
function Accordion({ titleList, contentList, keyList }: IProps) {
  // console.log(list);
  return (
    <div className="row accordion__box">
      <div className="col-12">
        <div className="list-group" id="list-tab" role="tablist">
          {contentList.map((val, i) => (
            <div id="accordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target={`#collapse${i}`}
                      aria-expanded="true"
                      aria-controls={`collapse${i}`}
                    >
                      {titleList[i]}
                    </button>
                  </h5>
                </div>

                <div
                  id={`collapse${i}`}
                  // className="collapse show"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  {keyList.map((_val, _i) => (
                    <div className="card card-body">{`${_val}: ${val[
                      _val
                    ].toString()}`}</div>
                  ))}
                </div>
              </div>
            </div>

            // <section key={i}>
            //   <button
            //     className="btn btn-outline-dark"
            //     type="button"
            //     data-toggle="collapse"
            //     data-target={`#collapseExample${i}`}
            //     aria-expanded="false"
            //     aria-controls={`#collapseExample${i}`}
            //   >
            //     {val.buttonTxt}
            //   </button>

            //   {val.content.map((_val, _i) => (
            //     <div className="collapse" id={`#collapseExample${i}`} key={_i}>
            //       <div className="card card-body">{_val}</div>
            //     </div>
            //   ))}
            // </section>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Accordion;
