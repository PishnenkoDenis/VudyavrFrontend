import React, { memo, useCallback, useState } from "react";
import {Button, Modal} from "react-bootstrap";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";


import styles from "./registration.module.scss";

const Registration = () => {
    const [show, setShow] = useState(false);
    const [currentUser, setCurrentUser] = useState('user');

    const isUser = currentUser === 'user';
    const isEntity = currentUser === 'entity';

    const setSimpleUser = useCallback(() => setCurrentUser('user'), [setCurrentUser]);
    const setEntityUser = useCallback(() => setCurrentUser('entity'), [setCurrentUser]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Button variant="outline-primary" onClick={handleShow}>Register</Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>РЕГИСТРАЦИЯ</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={styles.btnContainer}>
              <Button 
              variant="outline-primary" 
              onClick={setSimpleUser} 
              active={isUser}
              >
                ЧАСТНЫЙ КЛИЕНТ
              </Button>
              <Button 
              variant="outline-primary" 
              onClick={setEntityUser} 
              active={isEntity}
              >
                ЮРИДИЧЕСКОЕ ЛИЦО
              </Button>
            </div>
            <RegistrationForm currentUser={currentUser}/>
          </Modal.Body>
        </Modal>
        </>
    )
}

export default memo(Registration);