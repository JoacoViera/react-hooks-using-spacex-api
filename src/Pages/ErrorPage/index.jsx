import React from "react";
import sadFace from "../../images/sad_face.png";

export default function ErrorPage() {
  return (
    <div>
      <h1>Oops!</h1>
      <img style={{ width: "400px" }} src={sadFace} />

      <h4>Something went wrong</h4>
    </div>
  );
}
