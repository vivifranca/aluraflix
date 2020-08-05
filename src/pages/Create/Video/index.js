import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CreateVideo() {
  return (
    <PageDefault>
      <h1>Cadastrar Video</h1>

      <Link to="/create/category">
        Cadastrar categoria
      </Link>
    </PageDefault>
  );
}

export default CreateVideo;
