//import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import React, { useState } from 'react';
// import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const Dashboardsettings = () => {
    const [formData, setFormData] = useState({
        schoolName: '',
        currentSession: '',
        schoolAcronym: '',
        phoneNumber: '',
        schoolEmail: '',
        schoolAddress: '',
        termEndingDate: '',
        nextTermBeginningDate: ''
        crecheFees: '',
        nurseryFees: '',
        primaryFees: '',
        secondaryFees: '',
        seniorSecondaryFees: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      return (
    // <div className="form-container">
    //   <h2>Update School Settings</h2>
    //   <form className="form">
    //     <label>
    //       School Name:
    //       <input
    //         type="text"
    //         name="schoolName"
    //         value={formData.schoolName}
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <label>
    //       Current Session:
    //       <input
    //         type="text"
    //         name="currentSession"
    //         value={formData.currentSession}
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <label>
    //       School Acronym:
    //       <input
    //         type="text"
    //         name="schoolAcronym"
    //         value={formData.schoolAcronym}
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <label>
    //       Phone Number:
    //       <input
    //         type="tel"
    //         name="phoneNumber"
    //         value={formData.phoneNumber}
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <label>
    //       School Email:
    //       <input
    //         type="email"
    //         name="schoolEmail"
    //         value={formData.schoolEmail}
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <label>
    //       School Address:
    //       <textarea
    //         name="schoolAddress"
    //         value={formData.schoolAddress}
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <label>
    //       Term Ending Date:
    //       <input
    //         type="text"
    //         name="termEndingDate"
    //         value={formData.termEndingDate}
    //         onChange={handleChange}
    //         placeholder="M/D/YYYY"
    //       />
    //     </label>
    //     <label>
    //       Next Term Beginning Date:
    //       <input
    //         type="text"
    //         name="nextTermBeginningDate"
    //         value={formData.nextTermBeginningDate}
    //         onChange={handleChange}
    //         placeholder="M/D/YYYY"
    //       />
    //     </label>
    //   </form>
    // </div>
    <div class="mb-3 row" style={{padding: "20px"}}>
            <div class="col">
            <h3>school system settings</h3>
        <Form style={{paddingRight:"20px"}}>
    <Row className="mb-3">
      <Form.Group as={Col}>
        <Form.Label>School Name</Form.Label>
<Form.Control type="text" placeholder="Enter name" value={formData.schoolName} onchange={handleChange}/>
      </Form.Group>

      <Form.Group as={Col}>
        <Form.Label>Current Session</Form.Label>
<Form.Control type="text" placeholder="2023-2024" value={formData.currentSession} onchange={handleChange}/>
      </Form.Group>
    </Row>

    <Row className="mb-3">
      <Form.Group as={Col}>
        <Form.Label>Phone Number</Form.Label>
<Form.Control type="text" value={formData.phoneNumber} onchange={handleChange}/>
      </Form.Group>

      <Form.Group as={Col}>
        <Form.Label>School Email</Form.Label>
<Form.Control type="text"  value={formData.schoolEmail} onchange={handleChange}/>
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" >
      <Form.Label>Address</Form.Label>
      <Form.Control type="text" value={formData.schoolAddress} onchange={handleChange} />
    </Form.Group>

    <Row className="mb-3">
      <Form.Group as={Col}>
        <Form.Label>This term ends</Form.Label>
<Form.Control type="text" placeholder="MM-DD-YYYY" value={formData.termEndingDate} onchange={handleChange}/>
      </Form.Group>

      <Form.Group as={Col}>
        <Form.Label>Next term begins</Form.Label>
<Form.Control type="text"  placeholder="MM-DD-YYYY" value={formData.nextTermBeginningDate} onchange={handleChange}/>
      </Form.Group>
    </Row>
    <Form.Group className="mb-3" >
      <Form.Label>School acronym</Form.Label>
      <Form.Control type="text" value={formData.schoolAcronym} onchange={handleChange} />
    </Form.Group>
    {/* <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Address 2</Form.Label>
      <Form.Control placeholder="Apartment, studio, or floor" />
    </Form.Group>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Choose...</option>
          <option>...</option>
        </Form.Select>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Zip</Form.Label>
        <Form.Control />
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" id="formGridCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group> */}

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
            </div>

            <div class="col">
            <h3 style={{paddingLeft:"20px"}}>next term fees</h3>
            <Form style={{paddingLeft:"20px"}}>
            <Row className="mb-3">
      <Form.Group as={Col}>
        <Form.Label>Creche</Form.Label>
<Form.Control type="text"  value={formData.cre} onchange={handleChange}/>
      </Form.Group>

      <Form.Group as={Col}>
        <Form.Label>Current Session</Form.Label>
<Form.Control type="text" placeholder="2023-2024" value={formData.currentSession} onchange={handleChange}/>
      </Form.Group>
    </Row>

    <Row className="mb-3">
      <Form.Group as={Col}>
        <Form.Label>Phone Number</Form.Label>
<Form.Control type="text" value={formData.phoneNumber} onchange={handleChange}/>
      </Form.Group>

      <Form.Group as={Col}>
        <Form.Label>School Email</Form.Label>
<Form.Control type="text"  value={formData.schoolEmail} onchange={handleChange}/>
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" >
      <Form.Label>Address</Form.Label>
      <Form.Control type="text" value={formData.schoolAddress} onchange={handleChange} />
    </Form.Group>

    <Row className="mb-3">
      <Form.Group as={Col}>
        <Form.Label>This term ends</Form.Label>
<Form.Control type="text" placeholder="MM-DD-YYYY" value={formData.termEndingDate} onchange={handleChange}/>
      </Form.Group>

      <Form.Group as={Col}>
        <Form.Label>Next term begins</Form.Label>
<Form.Control type="text"  placeholder="MM-DD-YYYY" value={formData.nextTermBeginningDate} onchange={handleChange}/>
      </Form.Group>
    </Row>
    <Form.Group className="mb-3" >
      <Form.Label>School acronym</Form.Label>
      <Form.Control type="text" value={formData.schoolAcronym} onchange={handleChange} />
    </Form.Group>
  </Form>
            </div>
    </div>
      );
    };

export default Dashboardsettings;
