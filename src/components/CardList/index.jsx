import * as React from "react";
import  Card  from "../Card";
import { BrowserRouter as Router, Route } from "react-router-dom";

const List = ({ match, history }) => (
  <ul className="card-list">
    {cardData.map(card => (
      <Card
        key={card.id}
        isSelected={match.params.id === card.id}
        history={history}
        {...card}
      />
    ))}
  </ul>
);

export default function CardList() {
  return (<Router>
    <Route path={["/:id", "/"]} component={List} />
  </Router>)
};

const cardData = [

  {
    id: "BudgetTracker",
    category: "Fiance",
    title: "Keep Track of Your Budget",
    pointOfInterest: 80,
    backgroundColor: "#000"
  },
  {
    id: "FitnessTracker",
    category: "Stay Fit",
    title: "Keep up with your fitness goals!",
    pointOfInterest: 120,
    backgroundColor: "#000"
  },
  {
    id: "NeverAlone",
    category: "Community",
    title: "Support for Everyone",
    pointOfInterest: 260,
    backgroundColor: "#000"
  },
  {
    id: "reloc8",
    category: "Group Project",
    title: "Enjoy Reloc8-ing",
    pointOfInterest: 200,
    backgroundColor: "#000"
  },

  {
    id: "b",
    category: "Coming soon",
    title: "Future Project",
    pointOfInterest: 260,
    backgroundColor: "#000"
  }

];
