import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

class DishDetail extends Component {
  componentDidMount(){
    console.log('DishedDetail componentDidMount');
  }
  componentDidUpdate(){
    console.log("DishedDetail componentDidUpdate")
  }
  renderDish(dish){
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
  render() {
    if (this.props.selectedDish != null)
      return (
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.selectedDish)}
        </div>
      );
    else return <div></div>;
  }
}

export default DishDetail;
