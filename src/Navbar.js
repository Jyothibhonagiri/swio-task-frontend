import { Link } from "react-router-dom"

function Navbar(){
    return(
        <div>
          <nav class="navbar navbar-expand-lg " style={{backgroundColor:"black"}}>
  <div class="container-fluid" >
    <Link class="navbar-brand"  to="/" style={{color:"white",fontSize:"30px"}} ><b>REPL <i class="fa-solid fa-backward-step"></i>Y</b></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="Payment" style={{color:"white",marginLeft:"300px"}}><b>Payment page </b></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page"  to="transactionlist" style={{color:"white",marginLeft:"500px"}}><b>Transaction Details </b></Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar