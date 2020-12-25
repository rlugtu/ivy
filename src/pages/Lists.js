import React from 'react'
import { Link } from 'react-router-dom'
import List from '../components/List'
const Lists = () => {
    return(
        <div>
            this is the notes Page
            <Link to="/">to Dasboard</Link>
            <div className="alllistsContainer">
                <List />
                <List />
            </div>
            

        </div>
    )
}

export default Lists