import React, {useContext} from "react"
import { Context} from "../App";

 const YellowPage = () => {
     const MyContext = useContext();
    return(
        <div>
            <h1 style={{color: 'gold'}}> This is the Yellow Page</h1>
        </div>
    )
}

export default YellowPage;