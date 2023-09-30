import React from 'react';
import style from '../Header/HeaderPart.module.scss'
import logo from '../../img/logo.png'
import filter from '../../img/filter.png'
import NavBar from './NavBar/NavBar';
import { Col, Row } from 'antd';
import Search from './Search/Search';


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
            <img src={filter} alt='filter' />
            <Search />
        </Col>
      </Row>
    </header >
  );
}


export default Header;