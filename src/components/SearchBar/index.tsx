import { api } from '../../services/api';

export const SearchBar = () => {
  async function getCharacters(name: string) {
    const response = await api.get(`/characters`, {
      params: {
        nameStartsWith: name,
      },
    });
    return response.data.data.results;
  }

  return <div className="container"></div>;
};
