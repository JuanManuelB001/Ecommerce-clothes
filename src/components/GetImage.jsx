import { useState } from "react";
import loadingImage from "../img/loading.png";

export function GetImage({name, png, secondImage = loadingImage}){
    const [image, setimage] = useState(png || secondImage );

    const handlError = ()=>{
        if(image == png ){
            setimage(png)
        }else{
            setimage(loadingImage)
        }
    }
    return(
        <div>
            <img src={image} alt={name} onError={handlError}/>
        </div>
    );
}