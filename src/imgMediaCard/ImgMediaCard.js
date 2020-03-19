import React, { useState, useEffect } from 'react';
import CardItem from '../cardItem/CardItem';
import Axios from 'axios';

export default function ImgMediaCard() {
    
    const options = {
        headers: { 'Content-Type': 'application/json;charset=UTF-8' }
    };

    useEffect(() => {
        Axios.get('http://localhost:8080/crpto-app/api/items', options)
            .then((response) => {
                if (response.data) {
                    setCardItems(response.data);
                } else {
                    this.setState({ label: <h3>Invalid User</h3> })
                }
            }, (error) => {
                alert(error);
            });
    });

    const [cardItems, setCardItems] = useState([]);

    return (
        <React.Fragment>
            <CardItem cardItems={cardItems} />
        </React.Fragment>

    );
}