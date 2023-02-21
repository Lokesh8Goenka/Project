import React from "react";

function Home(){
    return(
        <div className="main">
            <h1 className="heading" style={{borderWidth: '20px'}}>Just <br />Cl!ck It!</h1>
            <br /><br />
            <button style={{'borderRadius':'5px'}}>Login</button>
            <button style={{'borderRadius':'5px'}}>Explore</button>
        </div>
    );
}

export default Home;