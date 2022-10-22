// import { Avatar } from '@mui/material'
import React from 'react'
import "./style.css"
// import cleaner from "../..÷÷/Assets/Chat/Cleaner.png"

const { innerWidth, innerHeight } = window;

const SideBarChat = (props) => {
  return (
    <div onClick={props.onClick} style={{display: 'flex', padding: 0.01 * innerHeight, cursor: 'pointer', border: '1px solid', margin: 0.02 * innerHeight, border: '1px solid #E8EAED', borderRadius: 7, }}>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <img src={props.image} width={44} height={42} style={{ borderRadius: 44 / 2 }} />
        <div style={{ alignSelf: 'flex-start', display: "flex", flexDirection: "column", alignItems: 'flex-start' }}>
          <div style={{ color: '#8D624C', fontSize: 11, fontWeight: '400', padding: 8, paddingBottom: 3 }}>
            {props.name}
          </div>
          <div className='sideBarChat'>
            {props.lastMessage}
          </div>
        </div>
      </div>
      <div style={{ marginLeft: 'auto' }}>
        <p style={{ margin: 0, color: '#828385', fontSize: 8, fontWeight: '400' }}>{props.time}</p>
      </div>
    </div>
  )
}

export default SideBarChat