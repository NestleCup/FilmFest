import React from 'react';
import { Modal } from 'antd';
import { useState } from 'react';
import filter from '../../../assets/img/filter.png'
import ModalForm from './ModalForm/ModalForm';
import style from './Modal.module.scss'

export const ModalPage = () => {
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
    <div>
      <div>
        <img src={filter} alt='filter' type="primary" onClick={showModal} className={style.modalImg} />
      </div>
      <Modal
        title="Фильтр"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <ModalForm />
      </Modal>
    </div>
  );
};
