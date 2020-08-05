import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CreateCategory() {
  const initialValues = {
    nome: '',
    description: '',
    color: '#000',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, valor) {
    // key: nome, description, bla, bli
    setValues({
      ...values,
      [key]: valor, // nome: 'valor'
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValue(name, value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategories([
      ...categories,
      values,
    ]);

    setValues(initialValues);
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (response) => {
        const parsedResponse = await response.json();
        setCategories([
          ...parsedResponse,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Create category:
        {values.nome}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Category"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Description"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Color"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <button type="submit">
          Create
        </button>
      </form>

      { categories.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categories.map((category) => (
          <li key={`${category.nome}`}>
            {category.nome}
            <br />
            {category.descricao}
            <br />
            {category.cor}
            <br />
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CreateCategory;
