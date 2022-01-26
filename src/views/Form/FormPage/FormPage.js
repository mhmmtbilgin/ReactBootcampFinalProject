import { Formik } from "formik";
import React from "react";
import Button from "../../../components/Button/Button";
import Field from "../../../components/Field/Field";
import Textarea from "../../../components/Textarea/Textarea";

export default function FormPage() {
  function addTodo() {}
  return (
    <div>
      <Formik
        initialValues={{
          content: "",
        }}
        onSubmit={addTodo}
      >
        {({ values, handleChange, handleSubmit, handleBlur }) => (
          <div>
            <Field label={"İsim  "} type={"text"} placeholder={"Emre"} />
            <Field label={"Soyisim  "} type={"text"} placeholder={"Emre"} />
            <Field label={"Yaş  "} type={"number"} placeholder={"Emre"} />
            <Field label={"TC No  "} type={"number"} placeholder={"Emre"} />
            <Field
              label={"Başvuru Nedeni  "}
              type={"text"}
              placeholder={"Emre"}
            />
            <Textarea label={"Adres  "} placeholder={"Emre"} />
            <Field label={"Resim  "} type={"text"} placeholder={"Emre"} />
            <Button buttonName={"Gönder"} onClick={handleSubmit} />
          </div>
        )}
      </Formik>
    </div>
  );
}
