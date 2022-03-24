import { useState, useEffect } from "react";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submiteado, setSubmiteado] = useState();
  const [formOK, setFormOk] = useState(false);
  const [isChecked, setIsChecked] = useState(false);


  const handleCheck = (e) => {
    setIsChecked(!isChecked);
    handleChange(e)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    setSubmiteado(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submiteado) {
      setFormOk(true);
    } else {
      return;
    }
  }, [errors]);

  return {
    form,
    errors,
    formOK,
    isChecked,
    handleCheck,
    handleChange,
    handleSubmit,
  };
};
