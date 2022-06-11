import React from "react";

const Card = ({ ele }) => {
  return (
    <div
      key={ele.id}
      style={{
        border: "2px solid grey",
        borderRadius: "10px",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <img
        src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
        style={{ width: "300px" }}
      />
      <h3>{ele.name}</h3>
      <p>Rating:{ele.reviews}</p>
      <h5>Payment_methods:</h5>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {ele.categories.map((ele, index) => (
          <p>`{ele} </p>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>PaymentAccepted:{ele.payment_methods}</p>
      </div>
    </div>
  );
};

export default Card;
