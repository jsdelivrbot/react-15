/**
 * Created by IrianLaptop on 2/9/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
                return (
                    <li key={book.title} className="list-group-item">{
                        book.title}
                    </li>

                );
            }
        );
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //whatever is return will show up as props inside of booklist
    return{
        books: state.books
    };
}

//Anything return will end up as props on the BookList Container
function mapDispatchToProps(dispatch){
    //whenever selectBook is called, the result should be passed to all reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote BookList from a component to a container - it needs to know about
// this new dispatch method, selectBook. Make it available as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);