import { LISTA } from "../Adat.js";
import Elem from "./Elem.js";

export default function JarekTer(props){
    return(
        <div className="jatekter">
            {
                LISTA.map((elem,index)=>{
                    return <Elem ertek = {elem} key = {index}/>;
                 })
            }
        </div>
    );
}
