/**
 * Created by IrianLaptop on 3/17/2017.
 */
import React, {Component, PropTypes} from 'react';
import {connect }from 'react-redux';
import {fetchPost} from '../actions/index';
class PostsShow extends Component{

    componentWillMount(){
        this.props.fetchPost(this.props.params.id);
    }

    render(){
        const post = this.props.post;
        if(!this.props.post){
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {post: state.posts.post};
}


export default connect(mapStateToProps, {fetchPost})(PostsShow);