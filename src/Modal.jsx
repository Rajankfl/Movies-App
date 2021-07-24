import React from "react";
function Modal(props) {
  return (
    <>
      <div
        className="modal fade"
        id={"examplemodal" + props.index}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {props.title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal" aria-label="Close"
              >
              </button>
            </div>
            <div className="modal-body">
              <p>{props.overview}</p>
              {props.key1 !== null ? (
                <iframe
                  src={"https://www.youtube.com/embed/" + props.key1}
                  title={props.title}
                  frameBorder="0"
                  style={{ width: "100%", height: "300px" }}
                ></iframe>
              ) : null}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Modal;
