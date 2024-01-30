import React from 'react';
import { useLocation } from 'react-router-dom'
import Crumbs from './Crumbs/Crumbs';

export const Breadcrumb = () => {

  const { state } = useLocation()

  return (
    <div>
    
        <Crumbs/>

    
    </div>
  );
};
