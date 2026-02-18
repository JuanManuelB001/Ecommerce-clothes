
import "../css/card.css"

export function Card({props}){
    console.log(props)
    return(
        <div>
            {props.map((prop)=>(
                prop.title
            ))}
        </div>
    );
}