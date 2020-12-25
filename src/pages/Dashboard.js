import React from 'react'
import {Link} from 'react-router-dom'
import List from '../components/List'

const Dashboard = () => {
    return (
        <div className="dashboardContainer">
            <Link to="/notes">to notes</Link>
            <div className="quotesContainer">
            <h3>This will be quotes</h3>

            </div>
            <div className="calendarAndLists">
                <div className="calendarContainer">
                    <h1>This is a calendar</h1>
                </div>
                <div className="allListsContainer">
                    <List />
                    <List />
                </div>
            </div>  
        </div>
    )
}

export default Dashboard 