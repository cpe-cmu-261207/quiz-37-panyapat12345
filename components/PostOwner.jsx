import React from "react";

export default function PostOwner(props) {
  return (
    <div>
      <div className="vstack gap-3">
        <div className="d-flex align-items-center gap-3">
          <img
            src={props.img}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <span className="fw-semibold fs-5">{props.name}</span>
        </div>
        <span>{props.status}</span>

        {props.like > 0 && (
          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span className="text-muted">{props.like} คน</span>
          </div>
        )}
        <hr className="m-0" />
      </div>
    </div>
  );
}
