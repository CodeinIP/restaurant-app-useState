import React from 'react'
import Card from './Card';

const AllCards = ({data}) => {
    
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"20px"}} >
        {
            data?.map((ele)=>(
                <Card ele={ele}/>
            ))
        }
    </div>
  );
}

export default AllCards