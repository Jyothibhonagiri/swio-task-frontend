import { useState } from "react"
    import { useNavigate } from "react-router-dom"
    
    function Payment() {
        const [username, setusername] = useState()
        const [useramount, setuseramount] = useState()
        
        const [ formerror,setformerror] = useState({})
        const navigate = useNavigate()
        const onusernamechange = (e) => {
            setusername(e.target.value)
        }
        const onuseramountchange = (e) => {
            setuseramount(e.target.value)
        }
        const CreateTask = (UserData) => {
            let formerror = validatetaskform()
            setformerror(formerror)
            if(Object.keys(formerror).length===0){
              fetch("http://localhost:7000/api/payments/submit/", { method: "POST", headers: { 'content-type': "application/json" }, body: JSON.stringify(UserData) }).then(function (res) {
                return res.json()
            }).then(function (result) {
                if(result._id){
                    
              }
                console.log("data saved succesfully")
                navigate("/transactionlist")
               
            })
             }else{
                return;
             } }
       
        const validatetaskform = ()=>{
            let formerror ={}
                if(!username){
                    formerror.username="please enter your name"
                }if(!useramount){
                    formerror.useramount="please enter your amount"
                }
            return formerror
        }
        const savetransaction = (e) => {
            e.preventDefault();
            let UserData = {
                username,
                useramount,
            }
            CreateTask(UserData)
        }
        return (
            <div className="container">
                <h4 style={{marginTop:"3%"}}><i>Enroll Here!</i></h4>
                <div className="card" style={{ width: "30rem", marginLeft: "30%" , borderRadius:"20px",marginTop:"5%" }}>
                    <div className="card-body">
                        <form onSubmit={savetransaction}>
                            <div class="form-group" style={{ padding: "10px" }} value={{ username }} onChange={onusernamechange}>
                               <label >Name:</label>
                                <input type="text" class="form-control" placeholder="Enter your name" /><i style={{color:"red"}}>{formerror?.Name}</i><br/>
    
                            </div>
                            <div class="form-group" style={{ padding: "10px" }} value={{ useramount }} onChange={onuseramountchange}>
                                <label>Amount:</label>
                                <input type="text" class="form-control" placeholder=" enter your amount" /><i style={{color:"red"}}>{formerror?.amount}</i><br/>
                            </div>
                           
    
    
                            <button type="submit" class="btn btn-danger" style={{ width: "100px", height: "50px" }}>Submit</button>
                            
    
    
                        </form>
    
                    </div>
                </div>
               
            </div>
        )
    }
    
   

export default Payment