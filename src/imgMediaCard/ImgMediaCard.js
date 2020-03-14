import React, { useState } from 'react';
import CardItem from '../cardItem/CardItem';

export default function ImgMediaCard() {

    const [cardItems] = useState([
        {
            desc: 'HDFC Bank Ltd. is an Indian banking and financial services company headquartered in Mumbai, Maharashtra. It has a base of 104154 permanent employees as of 30 June 2019. HDFC Bank is India’s largest private sector lender by assets. It is the largest bank in India by market capitalisation as of March 2020.',
            imgName: 'hdfc-card.jpg',
            title: 'HDFC BANK',
            link: 'https://netbanking.hdfcbank.com/netbanking/?_ga=2.56389739.1178003057.1583874306-237548465.1583874306'
        },
        {
            desc: "Kotak Mahindra Bank is an Indian private sector bank headquartered in Mumbai, Maharashtra, India. In February 2003, the Reserve Bank of India issued a licence to Kotak Mahindra Finance Ltd., the group's flagship company",
            imgName: 'kotak-card.jpg',
            title: 'KOTAK MAHINDRA BANK',
            link: 'https://www.kotak.com/j1001mp/netapp/MainPage.jsp'
        },
        {
            desc: 'HDFC Bank Ltd. is an Indian banking and financial services company headquartered in Mumbai, Maharashtra. It has a base of 104154 permanent employees as of 30 June 2019. HDFC Bank is India’s largest private sector lender by assets. It is the largest bank in India by market capitalisation as of March 2020.',
            imgName: 'hdfc-card.jpg',
            title: 'HDFC BANK',
            link: 'https://netbanking.hdfcbank.com/netbanking/?_ga=2.56389739.1178003057.1583874306-237548465.1583874306'
        },
        {
            desc: "Kotak Mahindra Bank is an Indian private sector bank headquartered in Mumbai, Maharashtra, India. In February 2003, the Reserve Bank of India issued a licence to Kotak Mahindra Finance Ltd., the group's flagship company",
            imgName: 'kotak-card.jpg',
            title: 'KOTAK MAHINDRA BANK',
            link: 'https://www.kotak.com/j1001mp/netapp/MainPage.jsp'
        }
    ]);

    return (

        <CardItem cardItems={cardItems} />

    );
}