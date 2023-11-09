// NewApplicant.js

import React, { useState } from 'react';
import { Form, Checkbox, Input, Button, Modal,Icon, Grid } from 'semantic-ui-react';
import { toast } from 'react-toastify';
const NewApplication = (props) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    mobile: '',
    major: '',
    gpa: '',
    hasExperience: false,
    courseName: '',
    professorName: '',
    dept: '',
  });

  const handleInputChange = (e, { name, value }) => {
    setState({ ...state, [name]: value });
  };

  const handleCheckboxChange = () => {
    setState({ ...state, hasExperience: !state.hasExperience });
  };

  const handleFileUpload = (e) => {
    // Handle file upload here
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log(state);
  };
  const submitHandler=()=>{
    
    toast.success("fknsjkfsk")
    props.onClose()
  }

  const { name, email, mobile, major, gpa, hasExperience, courseName, professorName, dept } = state;

  return (
    <Modal open={props.isOpend} className="right-aligned-modal">
<Modal.Header>
<span>Modal Title</span>
          <Icon name="close" onClick={()=>props.onClose()} style={{ cursor: 'pointer' }} />
</Modal.Header>
<Modal.Content>
<div>
     
      <Form onSubmit={handleSubmit}>
        <Form.Field
          control={Input}
          label="Name"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <Form.Field
          control={Input}
          label="Email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <Form.Field
          control={Input}
          label="Mobile Number"
          name="mobile"
          value={mobile}
          onChange={handleInputChange}
        />
        <Form.Field
          control={Input}
          label="Major"
          name="major"
          value={major}
          onChange={handleInputChange}
        />
        <Form.Field
          control={Input}
          label="GPA"
          name="gpa"
          value={gpa}
          onChange={handleInputChange}
        />
        <Form.Field
          control={Checkbox}
          label="Previous Experience?"
          checked={hasExperience}
          onChange={handleCheckboxChange}
        />
        {hasExperience && (
          <div>
            <Form.Field
              control={Input}
              label="Course Name"
              name="courseName"
              value={courseName}
              onChange={handleInputChange}
            />
            <Form.Field
              control={Input}
              label="Professor Name"
              name="professorName"
              value={professorName}
              onChange={handleInputChange}
            />
            <Form.Field
              control={Input}
              label="Department"
              name="dept"
              value={dept}
              onChange={handleInputChange}
            />
          </div>
        )}
        <Form.Field
          control={Input}
          type="file"
          label="Upload Resume"
          onChange={handleFileUpload}
        />
        
      </Form>
    </div>
    
</Modal.Content>

<Grid style={{margin:0}}>
  <Grid.Row>

      <Button onClick={()=>props.onClose()}>
        cancel
      </Button>
   
    <Button onClick={submitHandler}>
        submit
      </Button>
  
  </Grid.Row>
</Grid>
    </Modal>

  );
};

export default NewApplication;
