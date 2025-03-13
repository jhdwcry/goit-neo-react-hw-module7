import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactSlice";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={Yup.object({
        name: Yup.string().min(3).max(50).required("Required"),
        number: Yup.string().min(3).max(50).required("Required"),
      })}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact({ id: nanoid(), ...values }));
        resetForm();
      }}
    >
      <Form className={css.form}>
        <Field className={css.input} name="name" placeholder="Name" />
        <ErrorMessage name="name" component="div" />
        <Field className={css.input} name="number" placeholder="Phone Number" />
        <ErrorMessage name="number" component="div" />
        <button className={css.button} type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;