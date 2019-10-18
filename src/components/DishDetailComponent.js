import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";


  
  function RenderDish(dish){
      return ( <Card>
        <CardImg
          top
          src={dish.image}
          alt={dish.name}
        />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>);
  }
  function DishDetail(props) {
    if (props.selectedDish != null)
      return (
        <div className="col-12 col-md-5 m-1">
          {RenderDish(props.selectedDish)}
        </div>
      );
    else return <div></div>;
  }


export default DishDetail;
