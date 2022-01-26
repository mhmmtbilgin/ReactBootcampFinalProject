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
            <Field label={"İsim  "} type={"text"} placeholder={"İsim"} />
            <Field label={"Soyisim  "} type={"text"} placeholder={"Soyisim"} />
            <Field label={"Yaş  "} type={"number"} placeholder={"Yaş"} />
            <Field
              label={"TC No  "}
              type={"number"}
              placeholder={"TC Kimlik Numarası"}
            />
            <Field
              label={"Başvuru Nedeni  "}
              type={"text"}
              placeholder={"Başvuru Nedeni"}
            />
            <Textarea label={"Adres  "} placeholder={"Adres"} />
            <Field label={"Resim  "} type={"text"} placeholder={"Resim"} />
            <Button buttonName={"Gönder"} onClick={handleSubmit} />
          </div>
        )}
      </Formik>
    </div>
  );
}
