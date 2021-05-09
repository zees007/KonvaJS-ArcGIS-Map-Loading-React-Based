import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import '../styles/MyStyle.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MapModel from "./MapModel";
import ReactDOM from 'react-dom';
import {Form, Formik, Field, useFormik, ErrorMessage, FieldArray} from "formik";
import * as Yup from "yup";
import ValidationTextError from "./ValidationTextError";
import AssignFacility from "./AssignFacility";
import NavBar from "./NavBar";


const validationSchema = Yup.object({
    fromDate: Yup.string()
        .required("Date is required"),
    toDate: Yup.string()
        .required("Date is required"),
    description: Yup.string()
        .required("Enter description")
});

const initialValues = {
    fromDate: '',
    toDate: '',
    description: '',
    assignFacility: ['']

}

const onSubmit = values => {

    console.log("Submit Values" + JSON.stringify(values))

}


export default class ProjectForm extends Component {

    onFacilities = () => {
        return this.props.history.push('/facilities')
    }

    render() {

        return (
            <div>
                <NavBar/>

                <div className="py-3">
                    <div className="container">
                    <div className="card">
                <div className="card-header">
                    <h1 className="text-dark">New Project</h1>
                </div>
                        <div className="card-body">
                <Formik initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}>

                    <Form>
                            <table className="table ">
                                <thead>
                                <tr>
                                    <td>Duration</td>
                                    <td>From</td>
                                    <td>
                                        <div className="form-group">
                                            <Field type="date" name="fromDate" className="form-control" id="fromDate"/>
                                            <ErrorMessage name="fromDate" component={ValidationTextError}/>
                                        </div>
                                    </td>
                                    <td>To</td>
                                    <td>
                                        <div className="form-group">
                                            <Field type="date" id="toDate" className="form-control" name="toDate"/>
                                            <ErrorMessage name="toDate" component={ValidationTextError}/></div>
                                    </td>
                                </tr>
                                </thead>
                            </table>

                        <hr></hr>
                        <div className="form-group">
                            <Field type="text" name="description" className="form-control" id="description"
                                   aria-describedby="descriptionHelp"
                                   placeholder="Description"/>
                            <ErrorMessage name="description" component={ValidationTextError}/>
                        </div>
                        <div className="row container">
                            <div className="col border-dark">
                                <div className="card ">
                                    <div className="card-header">
                                        <h5>Number of facilities &nbsp;&nbsp;&nbsp;&nbsp; 1</h5>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <div className="row ml-2">
                                                <h5 className="m-2">Location</h5>
                                                <div className="m-2">Single &nbsp;&nbsp;<Field type="radio" id="single"
                                                                                               name="single"/>
                                                </div>
                                                <div className="m-2">Multiple &nbsp;&nbsp;<Field type="radio"
                                                                                                 id="multiple"
                                                                                                 name="multiple"/>
                                                </div>
                                            </div>
                                        </h5>
                                        {/*<ul className="list-group list-group-flush">*/}
                                        {/*    <li className="list-group-item">*/}
                                        {/*        <div className="row align-items-center bg-light">*/}
                                        {/*            <div>Location on Map</div>*/}
                                        {/*            <div className="mb-3 mostRight"><Button*/}
                                        {/*                className="btn-success btn btn-sm"*/}
                                        {/*                onClick={this.onLoginClick}>*/}
                                        {/*                <FontAwesomeIcon icon={faPlus}/> Assign Facility</Button>*/}
                                        {/*                */}
                                        {/*                <MapModel ref={this.loginModalRef}></MapModel>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*    </li>*/}
                                        {/*</ul>*/}
                                        <div>
                                            <FieldArray name="assignFacility">
                                                {
                                                    (fieldArrayProps) => {
                                                        const {push, remove, form} = fieldArrayProps
                                                        const {values} = form
                                                        const {assignFacility} = values
                                                        console.log("Field array" + JSON.stringify(fieldArrayProps))
                                                        return (
                                                            <div>
                                                                {
                                                                    assignFacility.map((item, index) =>(
                                                                        <div key={index}>

                                                                            <AssignFacility name={`assignFacility[${index}]`}/>
                                                                            {
                                                                                index >0 &&(
                                                                                    <button className="btn-success btn-sm float-right" type="button" onClick={() =>remove(index)}>
                                                                            {' '}
                                                                                       - {' '}
                                                                                        </button>
                                                                                )}

                                                                            <button type="button" className="btn-success btn-sm float-right" onClick={() =>push('')}> + </button>
                                                                            {/*<div className="card-footer text-right">*/}
                                                                            {/*    <button className="btn-success btn-sm" onClick={() =>push('')}>*/}
                                                                            {/*        <FontAwesomeIcon icon={faPlus}/> Add*/}
                                                                            {/*        Facility*/}
                                                                            {/*    </button>*/}
                                                                            {/*</div>*/}
                                                                        </div>
                                                                    ))
                                                                }
                                                            </div>
                                                        )
                                                    }
                                                }

                                            </FieldArray>

                                        </div>

                                    </div>
                                    {/*<div className="card-footer text-right">*/}
                                    {/*    <button className="btn-success btn-sm" onClick={() =>push('')}>*/}
                                    {/*        <FontAwesomeIcon icon={faPlus}/> Add*/}
                                    {/*        Facility*/}
                                    {/*    </button>*/}
                                    {/*</div>*/}
                                </div>


                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-header">
                                        Attachments
                                    </div>
                                    <div className="card-body">

                                <span className="btn btn-squared-default btn-success text-center btn-file">
                              <FontAwesomeIcon icon={faPlus} className="marginPlusuploadIcon"/>
                              <input type="file"/>
                                </span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn-success btn float-right mb-3" onClick={this.onFacilities}> Create</button>
                    </Form>
                </Formik>
                        </div>
            </div>
                    </div>
                </div>
            </div>

        )
    }

}


