import React, { useMemo, useState } from 'react'
import { useGetReviewsByIdQuery } from '../../../services/KinopoiskApi'
import style from './Reviews.module.scss'
import { Divider, Typography, ConfigProvider, Button } from 'antd'
import { useParams } from 'react-router-dom'
import Loading from '../../Loading/Loading'
import like from '../../../assets/img/icon/like.png'
import dislike from '../../../assets/img/icon/dislike.png'
import { getToFormateDate } from '../../../utils/helpers/getToFormateDate'
import ModalWindow from './ModalWindow/ModalWindow'
import uuid from 'react-uuid'

const { Paragraph } = Typography

const Reviews = () => {
  const { kinopoiskId } = useParams()
  const [ellipsis] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectItem, setSelectItem] = useState(null)
  const { data, error, isLoading } = useGetReviewsByIdQuery(kinopoiskId)

  const slisedData = useMemo(
    () =>
      data?.items?.slice(0, 2).map((item) => ({
        id: uuid(),
        ...item,
      })),
    [data]
  )

  const showModal = (item) => () => {
    setSelectItem(item)
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  return data?.items?.length ? (
    <ConfigProvider
      theme={{
        token: {
          fontSize: 15,
          colorText: '#a5a1b2',
          colorSplit: '#1C1E2A',
          colorLink: '#FF0000',
        },
      }}
    >
      <div className="wrap">
        <p className="title">Рецензии зрителей</p>
        <div className={style.container}>
          {error ? (
            <div className="error">oh no errr</div>
          ) : isLoading ? (
            <Loading />
          ) : (
            slisedData.map((item) => (
              <div key={item.id} className={style.block}>
                <div className={style.flex}>
                  <p className={style.title}>{item.author}</p>
                  <div className={style.flex}>
                    <div className={style.container__grade}>
                      <img src={like} alt="like" />
                      <span className={style.positiveRating}>
                        {item.positiveRating}
                      </span>
                    </div>
                    <div className={style.container__grade}>
                      <img src={dislike} alt="dislike" />
                      <span className={style.negativeRating}>
                        {item.negativeRating}
                      </span>
                    </div>
                  </div>
                </div>
                <p className={style.subtitle}>{item.title}</p>
                <Divider />
                {/* <pre className="discription"> */}
                <Paragraph
                  ellipsis={
                    ellipsis
                      ? { rows: 3, expandable: true, symbol: ' ' }
                      : false
                  }
                >
                  <Button type="link" onClick={showModal(item)}>
                    подробнее...
                  </Button>
                  {item.description}
                </Paragraph>
                {/* </pre> */}

                <span className={style.date}>
                  {getToFormateDate(item.date, 'D MMMM YYYY')}
                </span>
              </div>
            ))
          )}
        </div>
        <ModalWindow
          item={selectItem}
          handleOk={handleOk}
          handleCancel={handleCancel}
          isModalOpen={isModalOpen}
        />
      </div>
    </ConfigProvider>
  ) : null
}

export default Reviews
