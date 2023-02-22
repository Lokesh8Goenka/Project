import React from "react";

const btnStyle = {
    width: "100px", 
    height: "50px",
    borderRadius: "25px",
    fontSize : "25px"
  }

function Home(){
    return(
        <div className="main">
            <h1 className="heading" style={{borderWidth: '20px'}}>Just <br />Cl!ck It!</h1>
            <br /><br />
            <table>
                <tr>
                    {/* <td><button style={{ width: "100px", height: "50px",borderRadius: "25px",fontSize : "25px"}}>Login</button></td> */}
                    <td><button style={btnStyle}>Explore</button></td>
                </tr>
            </table>
        </div>
    );
}

export default Home;