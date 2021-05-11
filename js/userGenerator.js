//https://randomuser.me/api/?gender=female
import React from 'react';
import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import "./App.css";

const App = () => {
    const [cardData, setCardData] = useState([]);
    const [visible, setVisible] = useState(5);

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

    //Render card function responsible for creating the individual cards
    const renderCard = (person, index) => {
        return (
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={person.picture.large} />
                <Card.Body>
                    <Card.Title>
                        {person.name.first} {person.name.last}
                    </Card.Title>
                    <Card.Text>
                        <ul>
                            <li>{person.email}</li>
                            <li>{person.cell}</li>
                            <li>{person.gender}</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    };
    return (
        <div className="user">
            <div className="wrapper">
                <div className="cards">
                    {cardData.slice(0, visible).map(renderCard)}
                </div>
            </div>
            {visible < cardData.length && (<button onClick={loadMore}>Load More</button>)}
        </div>
    );
};