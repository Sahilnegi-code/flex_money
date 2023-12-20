import React,{useState, useEffect} from 'react';

import "./FormStyle.css";
const Form = () => {
const [data , setData ] = useState({
  user_name :"",
  email:"" ,
  age: "",
  batch_timing:"" ,
  Date_Of_Payment :"",
  payment_status:false
});
const [paid , setPaid ] = useState(false)
const handleChange = (e)=>{
console.log(e.target.value);
console.log(data);
  setData({ ...data, [e.target.name]: e.target.value });
  
}
const handlePayment = async(e)=>{
  e.preventDefault();
console.log(data)
  try{
    const res =  await  fetch('/paid',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify(data)
    });
setPaid(true);
setData({ ...data, payment_status: true });
console.log('Payment has been done');

  }
  catch(err){
    console.log(err);
  }
  
}
const handleSubmit = async (e) => {
  e.preventDefault();

    try{
      const res =  await  fetch('/formSubmit',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body : JSON.stringify(data)
      });
  console.log(res);
  
  
    }
    catch(err){
      console.log(err);
    }
    
  }
  console.log("Submit");







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





  return (
    <div className='bg-image'  >

<div className='form-box'>
<form className='form-container' onSubmit={handleSubmit}>  



<div  >



<div style={{marginRight:'10px'}}>

<div class="mb-3">
    <label  class="form-label">Name :</label> &nbsp;
    <input type="text" class="form-control" value={data.user_name} onChange={handleChange} name='user_name' />
  </div>

  <div style={{marginBottom:'20px'}}>
  <label for="exampleInputEmail1" class="form-label">Email :</label> &nbsp;
    <input type="email" class="form-control"  name='email' value={data.email} onChange={handleChange}  />
  </div>
  
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Age Limit   :</label> &nbsp;
   <select name = "age"  onChange={handleChange}  >
    
    <option>
      Select Age
    </option>
    {
      Array.from({length:47},(_,index ) => 18+index ).map((val)=>
      (
        <option  key={val}   value={val} >
          {val}
        </option>

      )
      )
    }

    </select>

  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Batches : </label> &nbsp;&nbsp;&nbsp;&nbsp;
   <select name=  "batch_timing"  onChange={handleChange} >
   <option>
      Select Batches
    </option>
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
    <input type="date" name='Date_Of_Payment' value = {data.Date_Of_Payment}   onChange={handleChange} id="exampleCheck1"/>
  </div>

 
  <div class="mb-3">
    <label for="exampleInputPassword1"  class="form-label">Payment Status : </label> &nbsp; &nbsp;
    <p style={{display:'inline-block'}} >   { paid === true  ? "Paid" :"Unpaid" } </p>
  </div>




</div>

<div className='form-btn-container' >
<button type="submit" class="btn btn-success" > Submit </button>
<button onClick={handlePayment}  class="btn btn-success">Pay ₹500 </button>

</div>

</div>




  

  
</form>
</div>


    </div>


  )
}

export default Form