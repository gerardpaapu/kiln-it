import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import StatusModal from './StatusModal'
import { toLowHyphen } from '../client-utils'
import { updateCreationStatus } from '../actions/creations'

function StatusLogItem ({ creation }) {
  const [show, setShowModel] = useState(false)
  const [statusStyle, setStatusStyle] = useState(creation.status)
  const [currentStatus, setStatus] = useState({ id: creation.statusId, status: creation.status })

  let navigate = useNavigate()
  const dispatch = useDispatch()

  const statuses = useSelector(store => store.statuses)

  const style = toLowHyphen(statusStyle)
  const date = creation.dateComplete || creation.dateCreated
  const formattedDate = new Date(date).toDateString()

  useEffect(() => {
    show
      ? document.body.style.overflow = 'hidden'
      : document.body.style.overflow = ''
  }, [show, currentStatus])

  const showModal = () => {
    setShowModel(true)
  }

  const hideModal = () => {
    setShowModel(false)
  }

  const handleSelect = (e) => {
    const selected = statuses.find(obj => obj.status === e.target.value)
    setStatus(selected)
    setStatusStyle(e.target.value)
  }

  const onSubmit = () => {
    // e.preventDefault()
    hideModal()
    // delete creation.clay
    // delete creation.shape
    // delete creation.glaze
    creation.status = currentStatus.status
    creation.statusId = currentStatus.id
    const updatedCreation = { ...creation}
    console.log(updatedCreation, currentStatus)
    dispatch(updateCreationStatus(updatedCreation))
    navigate('/log')
  }

  return (
    <>
      {show &&
      <main className='main edit'>
        <StatusModal show={show} save={onSubmit} close={hideModal}>
          <div className='current'>
            <p>Selected</p>
            <p className={`status ${style}`}>
              {currentStatus.status}
            </p>
          </div>
          <div className='statusList'>
            {statuses
              ? statuses.map((statusobj) => {
                const styleItem = toLowHyphen(statusobj.status)

                return <button className={`status ${styleItem}`}
                  key={statusobj.id} value={statusobj.status}
                  onClick={handleSelect}>
                  {statusobj.status}
                </button>
              })
              : 'no statuses found'}
          </div>
        </StatusModal>
      </main>
      }

      { statuses
        ? <div className='item'>
          <div className={`status ${style}`}
            onClick={showModal}>
            {currentStatus.status}
          </div>

          <Link to='/creations/le-vase'>
            <div className='log-box' key={creation.id}>

              <img className='log-img'
                src='/images/plate.jpeg' alt='text tdb' />

              <table className='info'>
                <tbody >
                  <tr>
                    <td className='width info-shape'>{creation.shape}</td>
                    <td className='width'>Name: {creation.name}</td>
                  </tr>
                  <tr>
                    <td className='width'>{creation.clay} Clay</td>
                    <td className='width'>{creation.glaze} Glaze</td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      Made on {formattedDate}
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
          </Link>

        </div>
        : 'Sorry, I couldn\'t load data...'}
    </>
  )
}

export default StatusLogItem
