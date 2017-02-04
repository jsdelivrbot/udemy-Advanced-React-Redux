import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class CommentBox extends React.Component {
    constructor() {
        super();

        this.state = {
            comment: ''
        }
    };

    handleChange = (e) => {
        this.setState({comment: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.saveComment(this.state.comment);
        this.setState({comment: ''});
    };

    render(){
        return(
          <form className="CommentBox" onSubmit={this.handleSubmit}>
              <textarea value={this.state.comment} onChange={this.handleChange} />
              <div>
                <button action="submit">Submit</button>
              </div>
          </form>
        );
    }
}


export default connect(null, actions)(CommentBox);
