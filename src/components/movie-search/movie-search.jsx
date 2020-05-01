import React, {Fragment, Component} from 'react';

class MovieSearch extends Component {

    constructor() {
        super();
        this.state = {
            term: '',
            results: []
        }
    }

    render() {
        return (
            <Fragment>
                <section>
                    <form onSubmit={this.onSubmit} className="form">
                        <div className="form__group">
                            <label htmlFor="" className="form__label">Search Any Movie/TV Show</label>
                            <input
                                className="form__input"
                                placeholder="Search Me!"
                                onChange={this.onChange}
                                value={this.state.term}/>
                        </div>
                        <button className="button form__submit">Search Entertainment!</button>
                    </form>
                </section>
            </Fragment>
        );
    }
}

export default MovieSearch;