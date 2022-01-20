import React from 'react';
import Header from './Header'
import Features from './Features'
import FootNote from './FootNote'

export default function Home() {
    //throw new Error("Test");
    return (
        <div>
            <Header/>
            <Features/>
            <FootNote/>
        </div>
    )
}