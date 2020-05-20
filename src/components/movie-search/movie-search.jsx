import React, {Fragment, Component} from 'react';
import API from '../../utils/API';
import SearchResults from '../search-results/search-results';
class MovieSearch extends Component {

    constructor() {
        super();
        this.state = {
            term: '',
            results: []
        }
    }

    // term goes to the IMDB API
    searchMovie = movie => { // reformats the spaces for the API
        movie = movie.replace(/ /g, '%20');
        API.searchMovies(movie).then(res => {
            this.setState({results: res.data.Search})
        }).catch(err => console.log(err));
    }

    // tracks the key changes
    onChange = e => {
        this.setState({[e.target.id]: e.target.value});
    }
    // activate when search button
    onSubmit = e => {
        e.preventDefault();
        this.searchMovie(this.state.term);
    }


    render() {
        return (
            <Fragment>
                <section>
                    <form onSubmit={
                            this.onSubmit
                        }
                        className="form">
                        <div className="form__group">
                            <label htmlFor="" className="form__label">Search Any Movie/TV Show</label>
                            <input className="form__input" placeholder="Search Me!"
                                onChange={
                                    this.onChange
                                }
                                value={
                                    this.state.term
                                }/>
                        </div>
                        <button className="button form__submit">Search Entertainment!</button>
                    </form>
                </section>
                <section> {
                    this.state.results.map((res, index) => (
                        <SearchResults key={index}
                            movie={res}/>
                    ))
                } </section>
            </Fragment>
        );
    }
}

export default MovieSearch;
