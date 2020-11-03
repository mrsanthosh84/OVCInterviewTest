import React, { Component } from "react";
import { connect } from "react-redux";
import Cell from "./Cell";
import {getData} from "../redux/actions/dataActions";

export class Table extends Component {

  constructor(){
    super();
    this.state = { searchField : '' }
  }
  componentDidMount() {
    this.props.getData();
  }
  
  handleTableRowClick(id, name) {
    window.localStorage.setItem("name", name);
    window.localStorage.setItem("id", id);
    this.props.history.push("/user-post");
  }

  render() {
    const { users } = this.props;
    const {searchField} = this.state;
    const headings = [
      'Name',
      'Email',
      'City',
      'Company'
    ]
    const filterSearchByName = users.data.filter(user =>
      user.name.toLowerCase().includes(searchField?.toLowerCase()));

    const theadMarkup = (
      <tr data-testid="heading" className="heading">
        {headings.map((heading, index) => (
          <Cell key={`heading-${index}`} content={heading} header={true} />
        ))}
      </tr>
    );

    const tbodyMarkup = filterSearchByName.map((user, index) => (
      <tr data-testid="row" key={`row-${index}`} onClick={() => this.handleTableRowClick(user.id, user.name)}>
        <td data-testid="username">{user.name}</td>
        <td>
          <a data-testid="email" href={`mailto:${user.email}`}>
            {user.email}
          </a>
        </td>
        <td data-testid="city">{user.address.city}</td>
        <td data-testid="company">{user.company.name}</td>
      </tr>
    ));

    return (
      <div>
        <input
          type="search"
          onChange={(e) => this.setState({ searchField: e.target.value })}
          placeholder="Search for a name!"
        />
        <br/> <br/>
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
  users: state.data,
});

export default connect(mapStateToProps, { getData })(Table);
