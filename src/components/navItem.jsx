import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavItem extends Component {
  state = {};
  render() {
    return (
      <li className="nav-item">
        <Link
          id={this.props.id}
          to={"/" + this.props.linkName}
          className="nav-link"
        >
          {this.props.linkName}
        </Link>
      </li>
    );
  }
}

export default NavItem;
