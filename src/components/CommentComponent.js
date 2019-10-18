import React, { Component } from "react";


class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  formatDate(val){
      
      let d = new Date(val);
      //console.log(d);
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return months[d.getMonth()] + " "+ d.getDay()+", "+d.getFullYear();
    }
  renderComment(dish) {
    //console.log(dish.comments);
    if (dish != null) {
        //console.log("Comment renderComment");
      if (dish.comments != null) {
        //console.log("Comment renderComment1");
        const comments = dish.comments.map(comment => {
          return (
            <div key={comment.id}>
              <p>{comment.comment}</p>
              <p>-- {comment.author}, {this.formatDate(comment.date)}</p>
            </div>
          );
        });
        return <div>{comments}</div>;
      } else return <div></div>;
    } else return <div></div>;
  }
  render() {
    
    if (this.props.selectedDish != null){
        //console.log("Comment render1");
        return (
          
          <div className="col-12 col-md-5 m-1">
          <h2>Comments</h2>
            {this.renderComment(this.props.selectedDish)}
          </div>
        );
    }
   
    else return <div></div>;
  }
}

export default Comment;
