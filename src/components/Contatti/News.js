import React, {Component} from 'react';
import Post from './Post';
import './style.scss'

class News extends Component{
    constructor (props) {
        super(props);
        this.state={
            post:[]
        };
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => this.setState({post: posts}));
    }
    render(){
        return(
            <div>
                {this.state.post.map (post => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        );
    }
}

export default News;

// via della beverara 250