import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { saveToLocalStorage, getFromLocalStorage } from "../utsil/localStorage";

const FormComponent = ({ setUserData }) => {
  const [avatar, setAvatar] = useState("");

  // Load saved data on mount
  useEffect(() => {
    const savedData = getFromLocalStorage("formData");
    if (savedData) {
      setAvatar(savedData.avatar || "");
    }
  }, []);

  // Validation Schema using Yup
  const validationSchema = Yup.object({
    fullName: Yup.string().min(3, "Too Short!").required("Full Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    avatar: Yup.string().url("Invalid URL").required("Avatar URL is required"),
  });

  return (
    <Formik
      initialValues={{
        fullName: getFromLocalStorage("formData")?.fullName || "",
        email: getFromLocalStorage("formData")?.email || "",
        avatar: getFromLocalStorage("formData")?.avatar || "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        saveToLocalStorage("formData", values);
        setUserData(values);
      }}
    >
      {({ setFieldValue }) => (
        <Form className="form">
<div className="image-container">

<p className="image-container-text">Upload Profile Photo</p>

<div  className="box">
  <img src="picture.png" alt="" className="image"/>
</div>


</div>

          <label htmlFor="fullName" className="enterName">Enter your name: </label>
          <Field type="text" name="fullName" className='enterNameField' />
          <ErrorMessage name="fullName" component="div" className="error" />

          <label htmlFor="email" className="enterName">Enter your email *</label>
          <Field type="email" name="email" className='enterNameField' />
          <ErrorMessage name="email" component="div" className="error" />

          

          <label htmlFor="fullName" className="enterName">Special request? </label>
          <Field type="text" name="textarea" className='textField' placeholder='Textarea' />
          <ErrorMessage name="fullName" component="div" className="error" />



          {/* <button type="submit">Generate Ticket</button> */}
<div className="detailsButton">
<button className="detailsBackButton"> Back</button>
<button className="detailsGetButton">Get My Free Ticket</button>
</div>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
