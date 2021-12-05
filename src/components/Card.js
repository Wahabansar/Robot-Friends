import React from "react";

const Card = (props) => {
  return (
    <div className="light">
      <img src={`https://robohash.org/${props.name}100*200`} alt="pic" />
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
        {CardData.map((data, i) => {
          return (
            <div className="col-lg-4" key={i}>
              <Card id={data.id} name={data.name} text={data.text} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cardlist;
