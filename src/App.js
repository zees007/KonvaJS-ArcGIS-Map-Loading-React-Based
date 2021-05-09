import './App.css';
import Login from "./components/Login";
import 'bootstrap/dist/css/bootstrap.css';

import React from "react";
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import Project from "./components/Project";
import ProjectForm from "./components/ProjectForm";
import MapModel from "./components/MapModel";
import Facilities from "./components/Facilities";

function App() {
    return (

        <BrowserRouter>

            <Switch>
                <Route path='/' exact component={Login}/>
                <Route path='/projects' exact component={Project}/>
                <Route path='/create-project' exact component={ProjectForm}/>
                <Route path='/map' exact component={MapModel}/>
                <Route path='/facilities' exact component={Facilities}/>

            </Switch>
        </BrowserRouter>
    );
}

export default App;
