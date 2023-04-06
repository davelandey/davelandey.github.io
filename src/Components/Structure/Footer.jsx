import { NavLink } from "react-router-dom";
import { React, useState } from "react";
import "../../App.css";
import Email from "../Email/Email";
import Resume from '../../Assets/Resume/Dave Landey - Résumé 2023.pdf';
import {
  Button,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const Footer = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <div id="footer">
        <ul id="footerList">
          <li>
            <Button color="danger" onClick={toggle}>
              Contact me!
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Contact me</ModalHeader>
              <ModalBody>
                <Email toggle = {toggle} />
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/dave-landey-62542141/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/davelandey">Github</a>
          </li>
          <li>
            <a href={Resume} download>Résumé (download)</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
