import { useState, useLayoutEffect } from 'react';

import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';
import api from '../../services/api';
import ImageErrorView from '../ImageErrorView';
import Loader from '../Loader';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function ImageGallery({ searchImages }) {

  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  if (searchImages !== query) {
    setQuery(searchImages);
    setCurrentPage(1);
    setImages([]);
  };

  useLayoutEffect(() => {
    if (!query) {
      return;
    };

    setStatus(Status.PENDING);

    api
      .handleApi(query, currentPage)
      .then(response => {
        setImages(prev => [...prev, ...response.hits]);
        setStatus(Status.RESOLVED);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });

  }, [currentPage, searchImages, query]);

  const onIncrementPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  if (status === 'idle') {
    return (
      <div className="startMessage">Введите что-то в поисковой строке</div>
    );
  };

  if (status === 'resolved') {
    return (
      <>
        <ul className="ImageGallery">
          {images.map(image => (
            <ImageGalleryItem
              key={image.webformatURL}
              littleImage={image.webformatURL}
              largeImage={image.largeImageURL}
              id={image.id}
              tags={image.tags}
            />
          ))}
        </ul>
        {images.length > 0 && <Button onClick={onIncrementPage} />}
      </>
    );
  };

  if (status === 'pending') {
    return (
      <Loader />
    );
  };

  if (status === 'rejected') {
    return <ImageErrorView message={error.message} />;
  };

};
