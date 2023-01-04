import { Fragment } from "react";

// importing style from style-components
import styled from "styled-components";

//importing from react-router-dom
import { Outlet } from "react-router-dom";

//imported components

import Footer from "./Footer";
import Nav from "./Nav";

const LayoutControl = styled.main`
  & > * {
    width: 100%;
  }
  & > * > * {
    padding: 2em 68px;
  }
  @media (max-width: 768px) {
    & > * > * {
      padding: 1.6em;
      width: 100%;
    }
  }
`;

const Layout = (props) => {
  return (
    <Fragment>
      <Nav />
      <LayoutControl>
        <Outlet />
      </LayoutControl>
      <Footer />
    </Fragment>
  );
};

export default Layout;
