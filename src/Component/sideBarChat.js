// import { Avatar } from '@mui/material'
import React from 'react'
import "./style.css"
import Avatar from '../Assets/Services/Avatar.png'
import './sideBarChat.css'

// import cleaner from "../..÷÷/Assets/Chat/Cleaner.png"

const { innerWidth, innerHeight } = window;

const SideBarChat = (props) => {
  return (
    <div className='sideBar-inner-container'  onClick={props.onClick}>
      <div className='sideBar-inner-container-first-section'>
        <img src={props.image ? props.image : Avatar} width={44} height={42} />
        <div className='first-section-name-msg'>
          <div className='first-section-name'>
            {props.name}
          </div>
          <div className='sideBarChat'>
            {props.lastMessage}
          </div>
        </div>
      </div>
      <div className='sideBar-inner-container-scnd-section'>
        <div className='scnd-section-time'>
          <p >{props.time}</p>
        </div>
        <div className='scnd-section-jobId'>
          <p >JOB ID:{props.job_id}</p>
        </div>
      </div>
    </div>
  )
}

export default SideBarChat