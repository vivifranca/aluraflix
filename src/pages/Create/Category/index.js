import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import BACKEND_URL from '../../../config';

function CreateCategory() {
  const initialValues = {
    nome: '',
    descricao: '',
    cor: '#000',
  };

  const { handleChange, values, clearForm } = useForm(initialValues);

  const [categories, setCategories] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setCategories([
      ...categories,
      values,
    ]);

    clearForm();
  }

  useEffect(() => {
    fetch(`${BACKEND_URL}categorias`)
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
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Description"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Color"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button type="submit">
          Create
        </Button>
      </form>

      { categories.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categories.map((category) => (
          <li key={`${category.id}`}>
            {category.titulo}
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
