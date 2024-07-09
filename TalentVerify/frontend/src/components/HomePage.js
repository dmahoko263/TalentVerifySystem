import React, { Component } from "react";
import BulkUploads from "./BulkUploads";
import EmployeeList from "./EmployeesList";
import AddEmployee from "./AddEmployee";
import Navigation from "./Navigation";
import '../static/css/App.css';
import '../../static/css/index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class HomePage extends Component {
    render() {
        return (
            <Router>
                <Navigation />
                <div className="content-wrapper"> 
                         <Routes>
                    <Route path="/" element={<p>This is HomePage</p>} />
                    <Route path="/upload" element={<BulkUploads />} />
                    <Route path="/elist" element={<EmployeeList />} />
                    <Route path="/employees/add" element={<AddEmployee />} />
                     </Routes>
                </div>
                
            </Router>
        );
    }
}
