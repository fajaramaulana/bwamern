import React from "react";
import "./SideDrawer.css";
import Button from "elements/Button/index";

const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  
  return (
    <nav className={drawerClasses}>
        <div className="brand-icon" style={{marginLeft: '20px'}}>
      <Button className="brand-text-icon" href="" type="link">
        Stay<span className="text-gray-900">cation.</span>
      </Button>
      </div>
        <li>
          <Button className="nav-link" type="link" href="/">
            Home
          </Button>
        </li>
        <li>
          <Button className="nav-link" type="link" href="/browse-by">
            Browse By
          </Button>
        </li>
        <li>
          <Button className="nav-link" type="link" href="/stories">
            Stories
          </Button>
        </li>
        <li>
          <Button className="nav-link" type="link" href="/agents">
            Agents
          </Button>
        </li>
    </nav>
  );
};

export default sideDrawer;
