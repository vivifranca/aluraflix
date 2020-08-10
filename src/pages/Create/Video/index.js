import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videoRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function CreateVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const initialValues = {
    titulo: 'Título do vídeo',
    url: 'https://www.youtube.com/watch?v=hhQ3RtvmfEg',
    categoria: 'Front-end',
  };

  const { handleChange, values } = useForm(initialValues);

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const chosenCategory = categories.find((category) => category.titulo === values.categoria);

    videoRepository.create({
      titulo: values.titulo,
      url: values.url,
      categoriaId: chosenCategory.id,
    })
      .then(() => {
        history.push('/');
      });
  }
  return (
    <PageDefault>
      <h1>Cadastrar Video</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Título do Vídeo"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL do Vídeo"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria do Vídeo"
          type="datalist"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categories.map((category) => category.titulo)}
        />

        <Button type="submit">
          Create
        </Button>
      </form>

      <Link to="/create/category">
        Cadastrar categoria
      </Link>
    </PageDefault>
  );
}

export default CreateVideo;
