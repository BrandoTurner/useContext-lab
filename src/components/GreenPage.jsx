import React, {useContext} from "react"
import { Context } from "../App";

 const GreenPage = () => {
     const MyContext = useContext(Context);
     console.log(MyContext)
    return(
        <div>
            <h1 style={{color: 'green'}}> This is the Green Page</h1>
        </div>
    )
}

export default GreenPage;