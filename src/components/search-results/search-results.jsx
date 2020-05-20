import React, {Fragment, Component} from 'react';
import API from '../../utils/API';

class SearchResults extends Component {
    constructor() {
        super();
        this.state = {
            id: ''
        }
    }

    getID = id => {
        API.getMovieId(id).then()
    }

    render() {
        const {Poster, Title, Year, imdbID} = this.props.movie;
        return (
            <Fragment>
                <figure className="movie-card">
                    <img src={Poster}
                        alt={Title}
                        className="movie-card__poster"/>
                    <h2 className="movie-card__title">
                        {Title}</h2>
                    <h5 className="movie-card__year">
                        {Year}</h5>
                    <button className="button movie-card__button" onClick= {
                                                () => {
                                                    this.getID(imdbID)
                                                }
                                            }>Learn More</button>
                </figure>
            </Fragment>
        )
    }
}


export default SearchResults;
