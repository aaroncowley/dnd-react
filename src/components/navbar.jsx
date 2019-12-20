import React, { Component } from "react";
import NavItem from "./navItem";

class NavBar extends Component {
  state = {
    links: [
      { id: 1, linkName: "home" },
      { id: 2, linkName: "roll" },
      { id: 3, linkName: "page" },
      { id: 4, linkName: "page" },
      { id: 5, linkName: "page" }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <ul className="nav nav-tabs justify-content-center">
            {this.state.links.map(link => (
              <NavItem key={link.id} link={link} linkName={link.linkName} />
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
