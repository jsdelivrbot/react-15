/**
 * Created by IrianLaptop on 3/16/2017.
 */
import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';

const FIELDS = {
    title: {
        type: 'input',
        label: 'Title for post'
    },
    category: {
        type: 'input',
        label: 'Enter some categories'
    },
    content: {
        type: 'textarea',
        label: 'Post contents'
    }
};

class PostsNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    renderField(fieldConfig, field) {
        const fieldHelper = this.props.fields[field];

        return (
            <div className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`}>
                <label>{fieldConfig.label}</label>
                <fieldConfig.type type="text" className="form-control" {...fieldHelper}/>
                <div className="text-help">
                    {fieldHelper.touched ? fieldHelper.error : ''}
                </div>
            </div>
        )

    }

    //the react router is available to all components through the context property. to get access we have to define a contextTypes
    onSubmit(props) {
        this.props.createPost(props)
            .then(()=> {
                this.context.router.push('/');
            });
    }

    render() {
        const { handleSubmit} = this.props;// handleSubmit = this.props.handleSubmit
        //const title = this.props.fields.title;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create a New Post</h3>
                {_.map(FIELDS, this.renderField.bind(this))}
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger"> Cancel </Link>
            </form>
        )
    }
}
function validate(values) {
    const errors = {};

    _.each(FIELDS, (type, field) => {
        if (!values[field]) {
            errors[field] = `Enter a ${field}`;
        }
    });
    return errors;
}
//connect: first arg is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
    form: 'PostNew',
    fields: _.keys(FIELDS),
    validate
}, null, {createPost})(PostsNew);

