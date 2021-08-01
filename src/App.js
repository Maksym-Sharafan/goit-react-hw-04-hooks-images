import { useState } from 'react';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

import './styles.css';

function App() {
  const [searchName, setSearchName] = useState('');

  return (
    <div className="App">
      <Searchbar onSubmit={setSearchName} />
      <ImageGallery searchImages={searchName} />
    </div>
  );

}

export default App;
