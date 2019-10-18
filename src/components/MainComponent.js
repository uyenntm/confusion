import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "../components/MenuComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "../components/DishDetailComponent";
import Comment from "../components/CommentComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }
  render() {
    return (
      <div>
        <Header />
        <Menu
          dishes={this.state.dishes}
          onClick={dishId => this.onDishSelect(dishId)}
        />
        <div className="container">
          <div className="row">
            <DishDetail
              selectedDish={
                this.state.dishes.filter(
                  dish => dish.id === this.state.selectedDish
                )[0]
              }
            />
            <Comment
              selectedDish={
                this.state.dishes.filter(
                  dish => dish.id === this.state.selectedDish
                )[0]
              }
            ></Comment>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
