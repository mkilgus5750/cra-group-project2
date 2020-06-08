import React, {Component} from 'react';
import {Card, CardImg, CardTitle, CardText, CardLink, CardBody} from 'reactstrap';
import './Post.css';
import postItImage from "./postit.png";

export default class Post extends Component {
    render(){
        const link = this.props.link;
        const title = this.props.title;
        const description = this.props.description;

        return(
            <div className="post">
                <Card style={{ width: '18rem' }} color="info">
                        <h1><span role="img" aria-label="tack">📌</span></h1>
                    <CardBody>
                        <CardTitle className="title">{title}</CardTitle>
                        <CardText>{description}</CardText>
        <CardLink href={link} className="link">Click here for {title}</CardLink>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
