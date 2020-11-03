import React, { Component } from "react";
import {fetchUserData} from "../redux/actions/dataActions";
import { connect } from "react-redux";
import Cell from "./Cell";


export class UserPost extends Component {

    componentDidMount() {
        this.props.fetchUserData(window.localStorage.getItem("id"));
    }

    render() {
        const {posts} = this.props;
        const headings = [
            'Title',
            'Body'
          ]
          
          const theadMarkup = (
            <tr data-testid="heading" className="heading">
              {headings.map((heading, index) => (
                <Cell key={`heading-${index}`} content={heading} header={true} />
              ))}
            </tr>
          );
      
          const tbodyMarkup = posts.value.map((post, index) => (
            <tr data-testid="row" key={`row-${index}`}>
              <td data-testid="title">{post.title}</td>
              <td data-testid="body">{post.body}</td>
            </tr>
          ));
        
        return (
          <div>
            <h2>{window.localStorage.getItem("name")}'s Posts:</h2>
            <br/>
            <table className="Table">
                <thead>{theadMarkup}</thead>
                <tbody data-testid="body">{tbodyMarkup}</tbody>
            </table>
          </div>
        );
      }
}

// map our redux store/state to the component props
const mapStateToProps = (state) => ({
    posts: state.data
});
  
export default connect(mapStateToProps, { fetchUserData })(UserPost);
