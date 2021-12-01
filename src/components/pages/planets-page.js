import React, { Component } from "react";
import { withRouter } from "react-router";

import Row from "../row/row";
import { PlanetList } from "../sw-components/item-lists";
import PlanetDetails from "../sw-components/planet-details";

const PlanetsPage = ({ history, match }) => {
  return (
    <Row
      left={<PlanetList onItemSelected={(itemId) => history.push(itemId)} />}
      right={<PlanetDetails itemId={match.params.id} />}
    />
  );
};

export default withRouter(PlanetsPage);
// import React, { useState } from "react";

// import Row from "../row/row";
// import { PlanetList } from "../sw-components/item-lists";
// import PlanetDetails from "../sw-components/planet-details";

// const PlanetsPage = () => {
//   const [select, setSelect] = useState(null);

//   const onItemSelected = (selectedItem) =>
//     setSelect((selectedItem) => selectedItem.selectedIte);

//   return (
//     <Row
//       left={<PlanetList onItemSelected={select} />}
//       right={<PlanetDetails itemId={onItemSelected} />}
//     />
//   );
// };

// export default PlanetsPage;
