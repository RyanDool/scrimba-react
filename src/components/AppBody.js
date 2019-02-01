import React, { Component } from 'react';

class AppBody extends Component{
    render() {
        const   firstName = "Ryan",
                lastName = "Dool",
                travelLocs = ['Seattle','Vancouver','Portland'],
                travelList = travelLocs.map((traveLoc) =>
                    <li key={traveLoc}>{traveLoc}</li>
                );
        return (
            <main>
                <h1>{firstName + ' ' + lastName}</h1>
                <p>These are my top 3 travel destinations:</p>
                <ul>
                    { travelList }
                </ul>
            </main>
        )
    }
}

export default AppBody