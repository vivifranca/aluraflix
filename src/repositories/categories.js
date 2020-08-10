import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAll() {
  return fetch(URL_CATEGORIES)
    .then(async (response) => {
      if (response.ok) {
        const parsedResponse = await response.json();
        return parsedResponse;
      }

      throw new Error('Não foi possível conectar com o Backend');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const parsedResponse = await response.json();
        return parsedResponse;
      }

      throw new Error('Não foi possível conectar com o Backend');
    });
}

export default {
  getAll,
  getAllWithVideos,
};
