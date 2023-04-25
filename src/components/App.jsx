import React, { useEffect, useState } from 'react';
import { Notify } from 'notiflix';
import { fetchImages } from '../ImageAPI/ImageAPI';
import { Searchbar } from './Searchbar/Searchbar';
import { Gallery } from './Gallery/Gallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [totalHits, setTotalHits] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    setIsLoading(true);
    const fetchData = async () => {
      const { totalHits, hits } = await fetchImages(query, page);
      if (totalHits === 0) {
        Notify.failure('Nothing was found for your request');
        setIsLoading(false);
        return;
      }

      setImages(prevImages => (page === 1 ? hits : [...prevImages, ...hits]));

      setTotalHits(prevTotalHits =>
        page === 1 ? totalHits - hits.length : prevTotalHits - hits.length
      );
      setIsLoading(false);
    };
    fetchData().catch(error =>
      Notify.failure(`Oops! Something went wrong! ${error}`)
    );
  }, [query, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleQuerySubmit = query => {
    setQuery(query);
    setPage(1);
  };

  return (
    <>
      <Searchbar onSubmit={handleQuerySubmit} />
      {images && <Gallery images={images} />}
      {!!totalHits && <Button onLoadMore={handleLoadMore} />}
      {isLoading && <Loader />}
    </>
  );
};
