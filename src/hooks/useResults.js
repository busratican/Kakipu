import { useState } from 'react';
import isbn from '../api/isbnApi';


export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const searchApi = async (searchTerm) => {

    let url = '/' + searchTerm;
    console.log(url);

    try {
      await isbn.get(url)
        .then(response => {
          console.log(response.data.book);
          setResults(response.data);
          setError('');
        }, error => {
          setError(error);
        });
    } catch (err) {
      setError(err.Message);
    }
  };

  return [searchApi, results, error];
}