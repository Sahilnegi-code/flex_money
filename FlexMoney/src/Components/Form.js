import React,{useState, useEffect} from 'react';

import "./FormStyle.css";
const Form = () => {
const [data , setData ] = useState({});

const handleSubmit = async (e) => {
  e.preventDefault();
}





const getData = async ()=>{
  try{
    const res =  await  fetch('/api');

    const data = await res.json();
    setData(data);


  }
  catch(err){
    console.log(err);
  }
  
}
useEffect(()=>{
  
},[])
  return (
    <div className='bg-image'  >

<div className='form-box'>
<form className='form-container' onSubmit={handleSubmit}>  



<div  >



<div style={{marginRight:'10px'}}>

<div class="mb-3">
    <label  class="form-label">Name :</label> &nbsp;
    <input type="text" class="form-control" name='user_name' />
  </div>

  <div style={{marginBottom:'20px'}}>
  <label for="exampleInputEmail1" class="form-label">Email :</label> &nbsp;
    <input type="email" class="form-control"  name='email' />
  </div>
  
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Age Limit   :</label> &nbsp;
   <select>
    
    <option>
      Select Age
    </option>
    {
      Array.from({length:47},(_,index ) => 18+index ).map((val)=>
      (
        <option key={val} value={val} >
          {val}
        </option>

      )
      )
    }

    </select>

  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Batches : </label> &nbsp;&nbsp;&nbsp;&nbsp;
   <select>
   <option  value ="6-7Am">
    6-7 Am
   </option>
   <option value ="7-8Am" >
    7-8 Am
   </option>

   <option value ="8-9Am" >
    8-9 Am
   </option>

   <option value="5-6Pm">
    5-6 Pm
   </option>

    </select>

  </div>



  
</div>

<div>
<div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Date : </label> &nbsp; &nbsp;
    <input type="date"  id="exampleCheck1"/>
  </div>

 
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Payment Status : </label> &nbsp; &nbsp;
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
  </div>




</div>

<div className='form-btn-container' >
<button type="submit" class="btn btn-success"> Submit </button>
<button  class="btn btn-success">Pay ₹500 </button>

</div>

</div>




  

  
</form>
</div>


    </div>


  )
}

export default Form