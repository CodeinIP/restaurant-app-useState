import axios from "axios";
import React, { useEffect, useState } from "react";
import AllCards from "./AllCards";

const Restaurants = () => {
  const [res,setRes] = useState();
  const [datas, setData] = useState();
  useEffect(() => {
    axios.get("http://localhost:8080/data").then((r) => {
      setRes(r.data);
      setData(r.data);
      // console.log(r.data);
    });
  }, []);
  // console.log(datas);
  const handleRatingFilter = (e) => {
    // console.log("clicked")
    // console.log(typeof e.target.value);
    let result = res.filter((ele) => ele.reviews >= Number(e.target.value));
    setData(result);
  };
  const handlePayments = (e) => {
    // console.log(typeof (e.target.value));
    // console.log(typeof (datas[0].payment_methods))
    let result = res.filter((ele) => ele.payment_methods === e.target.value);
    console.log(result);
    setData(result);
  };
  // const handleSorting=(e)=>{
  //   // console.log(typeof Number(datas[0].reviews))
  //   if(e.target.value==="lowtohigh"){
  //     console.log(e.target.value);
  //    let  result1 = res.sort((a,b)=>Number(a.reviews)-Number(b.reviews));
  //    setData(result1)
  //    console.log(result1)
  //   }
  //   if(e.target.value==="hightolow"){
  //     console.log(e.target.value);
  //     let result2 = res.sort((a,b)=>Number(b.reviews)-Number(a.reviews));
  //     setData(result2);
  //     console.log(result2)
  //   }
  //   // console.log("check")
  //   // console.log(datas);
  // }
  const handleSortingLH = ()=>{
     let  result1 = res.sort((a,b)=>Number(a.reviews)-Number(b.reviews));
     setData(result1)
     console.log(result1)
  }
  const handleSortingHL = ()=>{
    let result2 = res.sort((a,b)=>Number(b.reviews)-Number(a.reviews));
    setData(result2)
    console.log(result2)
  }

  return (
    <div>
      Restaurants List
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <div>
          <button onClick={(e) => handleRatingFilter(e)} value="1">
            All
          </button>
          <button onClick={(e) => handleRatingFilter(e)} value="2">
            ^2
          </button>
          <button onClick={(e) => handleRatingFilter(e)} value="3">
            ^3
          </button>
          <button onClick={(e) => handleRatingFilter(e)} value="4">
            ^4
          </button>
        </div>
        <div>
          <button onClick={(e) => handlePayments(e)} value="card">
            CardOnly
          </button>
          <button onClick={(e) => handlePayments(e)} value="cash">
            CashOnly
          </button>
          <button onClick={(e) => handlePayments(e)} value="all">
            AllpaymentAccepted
          </button>
        </div>
      
          <button onClick={()=>handleSortingHL()} value="hightolow" >HighToLow</button>
          <button onClick={()=>handleSortingLH()} value="lowtohigh" >LowToHigh</button>
        
      </div>
      <AllCards data={datas} />
    </div>
  );
};

export default Restaurants;
