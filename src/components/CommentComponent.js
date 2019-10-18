import React from "react";

  function formatDate(val){
      let d = new Date(val);
      //console.log(d);
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return months[d.getMonth()] + " "+ d.getDay()+", "+d.getFullYear();
    }
  function renderComment(dish) {
    //console.log(dish.comments);
    if (dish != null) {
        //console.log("Comment renderComment");
      if (dish.comments != null) {
        //console.log("Comment renderComment1");
        const comments = dish.comments.map(comment => {
          return (
            <div key={comment.id}>
              <p>{comment.comment}</p>
              <p>-- {comment.author}, {formatDate(comment.date)}</p>
            </div>
          );
        });
        return <div>{comments}</div>;
      } else return <div></div>;
    } else return <div></div>;
  }
  const Comment =props=> {
    
    if (props.selectedDish != null){
        //console.log("Comment render1");
        return (
          
          <div className="col-12 col-md-5 m-1">
          <h2>Comments</h2>
            {renderComment(props.selectedDish)}
          </div>
        );
    }
   
    else return <div></div>;
  }


export default Comment;
