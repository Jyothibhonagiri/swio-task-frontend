import { useState ,useEffect} from "react";

function Transactions() {
    const [transactions, settransactions] = useState([])
    const getAlltransactions = () => {
        fetch("http://localhost:7000/api/payments/view").then((res) => {
            return res.json();
        }).then((result) => {
            settransactions(result)
        })
    }
    useEffect(() => {
        getAlltransactions()
    }, [])
    return(
        <div className="transactioncontainer" >
          {transactions.map((item)=> <div  className="transactioncard">
           <h5 className="card-title">Name : {item.username}</h5>
           <h5 className="card-text">Amount : {item.useramount}</h5>
           <h5 className="card-text"> TransactionId : {item.transactionId}</h5>
           </div>
        
            )} </div>)
}

export default Transactions