import React from 'react'
import app from '../config/fire'

const Home=()=>{
    return(
        <>
        <h1>
            hello world
        </h1>
        <button onClick={()=>app.auth().signOut()}>
                Sign Out
            </button>
        </>
    )
}

export default Home;