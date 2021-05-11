import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import './App.css';

//To get the data from the API
const App = () => {
  const [cardData, setCardData] = useState([]);
  const [visible, setVisible] = useState(5);

  //This function is gonna grab 10 users from the API, the quantity of users can increase or decrease
  const allCardData = async () => {
      const response = await axios.get("https://randomuser.me/api/?results=10");
      //to access the results from the data
      setCardData(response.data.results);
  }
  // This function is responsible for loading more data every time the load more data buttom is pressed
  const loadMore = () => {
      setVisible(visible + 5) //This makes 5 more users to be displayed on screen
  }
  useEffect(() => {
      allCardData() //To trigger the allCardData function
  }, [])

  /* Render card function responsible for creating the individual cards
  It gives back a large picture of the customer and their details */
  const renderCard = (person, index) => {
      return (
          <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={person.picture.large} />
              <Card.Body>
                  <Card.Title>
                      {person.name.first} {person.name.last}
                  </Card.Title>
                  <Card.Text>
                      <ul>
                          <li>{person.email}</li>
                          <li>{person.phone}</li>
                          <li>{person.gender}</li>
                      </ul>
                  </Card.Text>
              </Card.Body>
          </Card>
      );
  };

  // Slice the card data use date and map over the render card
  //Using <div classes> because it's gonna be easier to style it with css
  return (
      <div className="App">
          <div className="wrapper">
              <div className="cards">
                  {cardData.slice(0, visible).map(renderCard)}
              </div>
          </div>
          {/* The button which loads more custormers */}
          {visible < cardData.length && (<button onClick={loadMore}>Load More</button>)}
      </div>
  );
};

export default App;
