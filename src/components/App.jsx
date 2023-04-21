import React, { Component } from 'react';
import { Notify } from 'notiflix';
import { fetchImages } from '../ImageAPI/ImageAPI';
import { Searchbar } from './Searchbar/Searchbar';
import { Gallery } from './Gallery/Gallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    totalHits: 0,
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ isLoading: true });
        const { totalHits, hits } = await fetchImages(query, page);
        if (totalHits === 0) {
          Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          this.setState({ isLoading: false });
          return;
        }
        this.setState(prevState => ({
          images: page === 1 ? hits : [...prevState.images, ...hits],
          totalHits:
            page === 1
              ? totalHits - hits.length
              : totalHits - [...prevState.images, ...hits].length,
        }));
        this.setState({ isLoading: false });
      } catch (error) {
        Notify.failure(`Something went wrong! ${error} `);
      }
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  handleQuerySubmit = query => {
    this.setState({ query, page: 1 });
  };

  render() {
    const { images, totalHits, isLoading } = this.state;
    const { handleQuerySubmit, handleLoadMore } = this;

    return (
      <>
        <Searchbar onSubmit={handleQuerySubmit} />
        {images && <Gallery images={images} />}
        {!!totalHits && <Button onLoadMore={handleLoadMore} />}
        {isLoading && <Loader />}
      </>
    );
  }
}
