import React from "react";

const Card = (props) => {
  return (
    <div className="light">
      <img src={`https://robohash.org/${props.name}100*200`} />
      <div className="text-center">
        <h1>{props.name}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

function Cardlist({ CardData }) {
  return (
    <div className="container">
      <div className="row">
        {CardData.map((data) => {
          return (
            <div className="col-lg-4">
              <Card id={data.id} name={data.name} text={data.text} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cardlist;
