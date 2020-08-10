import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  function setValue(key, valor) {
    // key: nome, description, bla, bli
    setValues({
      ...values,
      [key]: valor, // nome: 'valor'
    });
  }

  function handleChange(e) {
    const {
      name,
      value,
    } = e.target;
    setValue(name, value);
  }

  function clearForm() {
    setValues(initialValues);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
