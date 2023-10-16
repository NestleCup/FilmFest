import React from 'react';
import { Modal } from 'antd';
import { useState } from 'react';
import filter from '../../../img/filter.png'
import ModalForm from './ModalForm/ModalForm';
import style from './Modal.module.scss'

const ModalPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <img src={filter} alt='filter' type="primary" onClick={showModal} className={style.modalImg} />
      <Modal
        title="Фильтр"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <ModalForm />
      </Modal>
    </>
  );
};

export default ModalPage;