import React from 'react';
import style from '../Header/HeaderPart.module.scss'
import logo from '../../img/logo.png'

import NavBar from './NavBar/NavBar';
import { Col, Row } from 'antd';
import Search from './Search/Search';
import Modal from './ModalPage/ModalPage';


const Header = () => {
  return (
    <header >
      <Row className={style.headerFlex}>
        <Col flex="1000px" className={style.headerBlock}>
          <div className={style.headerLogo}>
            <div >
              <img src={logo} alt='logo' />
            </div>
            <h2 className={style.title} style={{color:"white"}}>MyFilms</h2>
          </div>
          <Col flex="500px">
              <NavBar />       
          </Col>
        </Col>
        <Col flex="auto" className={style.headerBlock} >      
           
            <Modal/>
            <Search />
        </Col>
      </Row>
    </header >
  );
}


export default Header;