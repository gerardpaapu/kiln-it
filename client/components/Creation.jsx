import React, { useEffect, useState } from 'react'
import { getCreationById } from '../apis/api'

export default function Creation (props) {
  const [creation, setCreation] = useState(null)
  const [imgIdx, setImgIdx] = useState(0)
  const [currentImg, setCurrentImage] = useState('')

  const images = ['/images/plate.jpeg', '/images/vase.png', '/images/plate.jpeg', '/images/vase.png', '/images/plate.jpeg']

  useEffect(() => {
    getCreationById(1)
      .then((resp) => {
        setCreation(resp)
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])

  useEffect(() => {
    setCurrentImage(images[imgIdx])
  }, [imgIdx])

  const getImage = (idx) => {
    setImgIdx(idx)
  }

  return (
    <>
      {creation
        ? <>
          <img className='creation-img'
            src={currentImg}/>

          <div className='icon-dots' >
            {images.map((dot, idx) => {
              return <div key={idx}
                className={imgIdx === idx ? 'dot selected' : 'dot'}
                id={idx}
                onClick={() => getImage(idx)}></div>
            })}
          </div>

          <div className='text-card'>
            <div className='text-card-content'>
              <p className='name'>{creation.name}</p>
              <p className='shape'>{creation.shape}</p>
              <p className='description'>{creation.description + ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam cras pharetra magna. Mattis auctor integer nunc adipiscing. Urna tempus integer aliquam ultricies consequat, tempus, aliquam rhoncus, urna. Tortor tellus ac arcu nec, pulvinar. Ut praesent etiam dui, elit non mi viverra nisi. Accumsan commodo neque, in turpis. Morbi in id elit, ultrices donec erat gravida diam.'}</p>
              <p className='date'>March 12 2021</p>
            </div>
          </div>
          <div className='icon-instagram'>O</div>
        </>
        : 'I\'m sorry no art was made apparently'}
    </>
  )
}
