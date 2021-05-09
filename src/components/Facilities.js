import React, {Component} from "react";
import NavBar from "./NavBar";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

export default class Facilities extends Component{

    render(){
        return(
            <div>
                <NavBar/>
                <div className="py-3">
                    <div className="container">
                        <div className="card">
                            <div className="card-header">
                                <h1>Facilities</h1>
                            </div>
                            <div className="card-body">
                                <Button className="btn btn-squared-default btn-success text-center">
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
