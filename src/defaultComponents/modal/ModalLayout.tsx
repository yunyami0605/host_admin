import React from "react";
import "./ModalLayout.scss";

interface IProps {
  onSubmit: () => void;
  onClose: () => void;
  children: JSX.Element | JSX.Element[];
}

/*
 * @def : ModalLayout
 * @param
 * - :
 * - :
 */
function ModalLayout({ onSubmit, onClose, children }: IProps) {
  return (
    <div
      className="modal fade show"
      id="exampleModalLong"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModalLong"
              onClick={onSubmit}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ModalLayout;
