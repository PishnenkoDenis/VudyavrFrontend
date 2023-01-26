import React, { memo, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LoginForm from '../LoginForm/LoginForm.jsx';
import { ReactComponent as BackgroundSVG } from '../../assets/scale.svg';

import styles from './header.module.scss';

const Header = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={styles.backgraund}>
        <BackgroundSVG />
      </div>
      <Navbar bg="light" expand="lg">
        <Button onClick={handleShow} variant="link">Войти</Button>
        {show && (
          <Modal show={show} onClick={handleShow} onHide={handleClose}>
            <LoginForm />
            </Modal>
        )}
      </Navbar>
    </>
  );
};

export default memo(Header);
