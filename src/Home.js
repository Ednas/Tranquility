import React from "react"
import logo from './globe.svg';
import Footer from './Footer'
import Header from './Header'
import HistoryFeed from './HistoryFeed';

export default function () {
    return (
        <>
            <Header />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <i className="fad fa-camera"></i>
                <p>
                    Learn about NASA's earth history
                </p>
            </header>
            <div className="home">
                <h1 style={{ textAlign: "center" }}>NASA Earth</h1>
                <p>Introduction to NASA's Earth Science</p>
                <p>NASA’s activities in space have brought new knowledge of the Earth, inspiring new ways of thinking about humanity and the planet. However, many people aren’t aware that NASA studies the Earth in addition to other planets. Your challenge is to tell stories of NASA’s Earth science enterprise using interactive digital tools. This will test your technical skills and your ability to think like a historian or educator.</p>
                <p>Learn what NASA has to offer in this interactive tutorial</p>
            </div>
            <HistoryFeed />
            <Footer />
        </>
    )
}
