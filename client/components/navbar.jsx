import React, { Component } from "react";
import NavItem from "./navItem";

class NavBar extends Component {
  state = {
    links: [
      { id: 1, linkName: "home", linkPath: "/" },
      { id: 2, linkName: "roll", linkPath: "/roll" },
      { id: 3, linkName: "page", linkPath: "/" },
      { id: 4, linkName: "page", linkPath: "/" },
      { id: 5, linkName: "page", linkPath: "/" }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <ul className="nav nav-tabs justify-content-center">
            {this.state.links.map(link => (
              <NavItem
                key={link.id}
                link={link}
                linkName={link.linkName}
                linkPath={link.linkPath}
              />
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
