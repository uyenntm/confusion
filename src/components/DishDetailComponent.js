import React from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from "./CommentForm";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
//import {postComment} from "../redux/ActionCreators";

function formatDate(val){
  let d = new Date(val);
  //console.log(d);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return months[d.getMonth()] + " "+ d.getDay()+", "+d.getFullYear();
}
function RenderComments({comments, postComment,dishId}) {
console.log("comment:",comments);
  if (comments != null) {
    //console.log("Comment renderComment1");
    const commentList =comments.map(comment => {
      return (
        <div key={comment.id}>
          <p>{comment.comment}</p>
          <p>-- {comment.author}, {formatDate(comment.date)}</p>
        </div>
      );
    });
    return <div>{commentList}
    <CommentForm  dishId={dishId} postComment={postComment}/>
    </div>;
  } else return <div></div>;

}
  function RenderDish({dish}){
    console.log("RenderDish:", dish);
    console.log("RenderDish name:", dish.name);
      return ( <Card>
        <CardImg
          top
          src={baseUrl+dish.image}
          alt={dish.name}
        />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>);
  }
  const  DishDetail=(props)=> {
   if(props.isLoading){
     return(
       <div className="container">
         <div className="row">
           <Loading></Loading>
         </div>
       </div>
     );
   }
   else if(props.errMess){
    return(
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    )
   }
   else if (props != null)
      return (
        <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h2>Comments</h2>
                        <RenderComments comments={props.comments} 
                          postComment={props.postComment}
                          dishId={props.dish.id}
                        />
                        
                    </div>
                </div>
                </div>
      );
    else return <div></div>;
  }


export default DishDetail;
