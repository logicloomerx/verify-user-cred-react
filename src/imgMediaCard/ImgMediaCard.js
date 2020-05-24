import React, { useState, useEffect } from 'react';
import CardItem from '../cardItem/CardItem';
import Axios from 'axios';

export default function ImgMediaCard(props) {

    
    useEffect(() => {
        const options = {
            headers: { 'Content-Type': 'application/json;charset=UTF-8' }
        };
    
        Axios.post('http://localhost:8080/crpto-app/api/items', JSON.stringify({
            userName:props.username
        }), options)
            .then((response) => {
                if (response.data) {
                    setCardItems(response.data);
                }
            }, (error) => {
                alert(error);
            });
    }, [props.username]);

    const [cardItems, setCardItems] = useState([]);

    return (
        <React.Fragment>
            <CardItem cardItems={cardItems} userName={props.username}/>
        </React.Fragment>

    );
}