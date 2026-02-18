import { useState } from "react";
import { UrlData } from "../data/UrlData";


export function Index({props}){
    const [data, setData] = useState(props)
    const dato = UrlData("")

    console.log(dato)
    return(
        <div>
            index page
        </div>
    );
}