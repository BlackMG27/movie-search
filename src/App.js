import React, {Fragment} from 'react';
import MovieSearch from './components/movie-search/movie-search';

function App() {
  return (
    <Fragment>
      <header>
        <h1 className="title">Want Something to Watch?</h1>
      </header>
      <MovieSearch/>
    </Fragment>
  );
}

export default App;
