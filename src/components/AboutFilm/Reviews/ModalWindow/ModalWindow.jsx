import React from 'react'
import style from './ModalWindow.module.scss'
import { ConfigProvider, Modal, Divider } from 'antd'
import { getToFormateDate } from '../../../../utils/helpers/getToFormateDate'
import like from '../../../../assets/img/icon/like.png'
import dislike from '../../../../assets/img/icon/dislike.png'

const ModalWindow = ({ isModalOpen, handleOk, handleCancel, item }) => {
  return (
    <ConfigProvider
      theme={{
        token: { colorText: 'white' },

        components: {
          Modal: {
            contentBg: '#2a2a3c',
            colorBgMask: '#000000e8',
          },
        },
      }}
    >
      <Modal
        footer={null}
        width={1000}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className={style.block}>
          <div className={style.flex}>
            <p className={style.title}>{item?.author}</p>
            <div className={style.flex}>
              <div className={style.container__grade}>
                <div className={style.grade__img}>
                  <img src={like} alt="like" />
                </div>
                <span className={style.positiveRating}>
                  {item?.positiveRating}
                </span>
              </div>
              <div className={style.container__grade}>
                <div className={style.grade__img}>
                  <img src={dislike} alt="dislike" />
                </div>
                <span className={style.negativeRating}>
                  {item?.negativeRating}
                </span>
              </div>
            </div>
          </div>
          <p className={style.subtitle}>{item?.title}</p>
          <Divider />
          <pre className="discription">{item?.description}</pre>
          <span className={style.date}>
            {getToFormateDate(item?.date, 'D MMMM YYYY')}
          </span>
        </div>
      </Modal>
    </ConfigProvider>
  )
}

export default ModalWindow
