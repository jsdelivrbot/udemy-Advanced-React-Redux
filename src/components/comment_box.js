import React from 'react';

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
        this.setState({comment: ''});
    };

    render(){
        return(
          <form className="CommentBox" onSubmit={this.handleSubmit}>
              <textarea value={this.state.comment} onChange={this.handleChange} />
              <button action="submit">Submit</button>
          </form>
        );
    }
}

export default CommentBox;
