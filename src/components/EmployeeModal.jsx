import React, { useState } from "react";
import axios from "axios";
import { Modal, Image, Header, Button } from "semantic-ui-react";

const EmployeeModal = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [employee, setEmployee] = useState({});

  const getEmployee = async () => {
    let response = await axios.get(`https://reqres.in/api/users/${id}`);
    setEmployee(response.data.data);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => {
        getEmployee();
        setOpen(true);
      }}
      open={open}
      trigger={
        <Button size="tiny" positive className="view-button">
          View
        </Button>
      }
    >
      <Modal.Content image id="modal-container">
        <Image
          className="image"
          size="small"
          src={employee.avatar}
          wrapped
        />
        <Modal.Description>
          <Header className="name">
            {employee.first_name} {employee.last_name}
          </Header>
          <p className="email">Email: {employee.email}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black">Edit</Button>
        <Button negative>Delete</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default EmployeeModal;
