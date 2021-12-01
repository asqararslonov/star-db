import React, { Component } from "react";
import { withRouter } from "react-router";

import { StarshipList } from "../sw-components/item-lists";

const StarshipsPage = ({ history }) => {
  return <StarshipList onItemSelected={(itemId) => history.push(itemId)} />;
};

export default withRouter(StarshipsPage);
