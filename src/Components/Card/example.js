import React from "react";
import {Card, CardMeta} from "test-vendor-2";


const CardExample = () => {
  return (

    <Card
    
      hoverable
      style={{ width: "140px", height: "200px" }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <CardMeta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  
  );
};
export default CardExample;
