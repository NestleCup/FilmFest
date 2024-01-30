// import React from 'react';
// import { Modal } from 'antd';
// import { useState } from 'react';
// import filter from '../../../assets/img/filter.png'
// import style from './Modal.module.scss'

// export const ModalPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const showModal = () => {
//     setIsModalOpen(true);
//   };
//   const handleOk = () => {
//     setIsModalOpen(false);
//   };
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };
//   return (
//     <div className={style.modal__block}>
//       <div className={style.modal__open}>
//         <img src={filter} alt='filter' type="primary" onClick={showModal} className={style.modal__img} />
//       </div>
//       <Modal
//         title="Фильтр"
//         open={isModalOpen}
//         onOk={handleOk}
//         onCancel={handleCancel}>
//       </Modal>
//     </div>
//   );
// };
