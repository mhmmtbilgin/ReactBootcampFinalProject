import url from "../../../assets/img/celebration-spark-svgrepo-com.svg"
import React from 'react';
import Thanks from "../../../components/ThanksPage/Thanks";
import "./index.css"
import { Link } from "react-router-dom";

export default function FormSubmitPage() {
  return <div className="form-submit">
      <div className="form-submit__back">
        <Link className="link" to={"/"}>
        <a class="go-back-next">&#8592; Forma geri dön</a>
        </Link>
        <Link className="link" to={"/admin"}>
        <a class="go-back-next">Admine git &#8594;</a>
        </Link>
      </div>
      <Thanks imgURL={url} label="Thanks For Form " />
  </div>;
}
