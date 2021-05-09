import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import MapModel from "./MapModel";
import ReactDOM from "react-dom";

export default class AssignFacility extends Component{

    mapModalRef = ({handleShow}) => {

            this.showModal = handleShow;
        console.log("handle show" + handleShow)

    }

    onAssignFacilityClick = () => {
        this.showModal();
    }



    render(){
        return(
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <div className="row align-items-center bg-light">
                        <div>Location on Map</div>
                        <div className="mb-3 mostRight"><Button
                            className="btn-success btn btn-sm"
                            onClick={this.onAssignFacilityClick}>
                            <FontAwesomeIcon icon={faPlus}/> Assign Facility</Button>

                            <MapModel ref={this.mapModalRef}></MapModel>
                        </div>
                    </div>
                </li>
            </ul>

        )
    }
}
ReactDOM.render(<MapModel/>, document.getElementById('root'))
