import React from "react";
import { withRouter } from "react-router";

import Row from "../row/row";
import { PersonList } from "../sw-components/item-lists";
import PersonDetails from "../sw-components/person-details";

const PeoplePage = ({ history, match }) => {
  return (
    <Row
      left={<PersonList onItemSelected={(id) => history.push(id)} />}
      right={<PersonDetails itemId={match.params.id} />}
    />
  );
};

export default withRouter(PeoplePage);
