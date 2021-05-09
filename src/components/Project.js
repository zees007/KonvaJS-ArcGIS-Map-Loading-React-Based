import React, {Component} from "react";
import '../styles/MyStyle.css';
import {faPlus} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import NavBar from "./NavBar";

export default class Project extends Component {

    openProjectForm = () => {

        return this.props.history.push('/create-project');
    }

    render() {
        return (
            <div>
                <NavBar/>
                <div className="py-3">
                    <div className="container">
                   <div className="card">
                       <div className="card-header">
                           <h1>Projects</h1>
                       </div>
                           <div className="card-body">
                               <Button className="btn btn-squared-default btn-success text-center"
                                       onClick={this.openProjectForm}>
                                   <FontAwesomeIcon icon={faPlus}/>
                               </Button>

                       </div>
                   </div>
                   </div>
                </div>
            </div>
        )
    }
}
