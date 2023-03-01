import { useParams } from "react-router-dom";

export default function Stock({ stocks }){
    let { symbol } = useParams()
    let index = stocks.findIndex((item) =>{
        return item.symbol === symbol;
    })
    console.log(index)
    console.log({stocks})
    console.log({symbol})
    let symbolVal = stocks[index]
    console.log(symbolVal)
    return(
        <div>

             <h1>{symbolVal.name}</h1>
             <p>{symbolVal.change}</p>
             <p>{symbolVal.lastPrice}</p>
             <p>{symbolVal.low}</p>
             <p>{symbolVal.high}</p>
        </div>
       
    );
    }