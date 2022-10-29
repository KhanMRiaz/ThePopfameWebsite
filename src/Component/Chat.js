import React, { useState } from 'react'
import Dots from '../Assets/Services/Dots.png'
import './ChatBox.css'
import { GiftedChat } from "react-web-gifted-chat";
import { useSelector } from 'react-redux';

const Chat = (props) => {
    const onSend = () => {
    }
    const [value, setValiue] = useState()
    const { innerHeight, innerWidth } = window
    const userId = useSelector((state) => state.user.user?.data?.user?.id)
    const renderInput = () => {
        return (
            <div style={{ backgroundColor: 'red' }}>
                <input style={{ backgroundColor: "white", borderColor: '#D1D3D6', borderRadius: 7, borderWidth: 1, borderStyle: 'solid', width: 0.57 * innerWidth, height: 40, paddingLeft: 20 }} onChange={(e) => setValiue(e.target.value)} placeholder={'Write your message...'} />
            </div>
        )
    }
    return (
        <>
            <div style={{
                height: 0.1 * innerHeight,
                padding: 0.012 * innerHeight,
                display: 'flex',
                alignItems: 'center',
                borderBottom: '1px solid lightgray',
                margin: 0.01 * innerHeight,
                background: '#fff',
                borderRadius: 0.04 * innerHeight,
                boxShadow: '-4px 3px 8px -4px rgb(0 0 0 / 75%)',
                borderRight: '1px solid #E8EAED',
                borderBottom: '1px solid #E8EAED',
            }}>
                <img src={props.image} width={86} height={86} style={{ borderRadius: 86 / 2 }} />
                <div style={{ flex: 1, display: 'flex', paddingLeft: 0.015 * innerWidth, alignItems: 'flex-start', flexDirection: 'column' }}>
                    <h3 style={{ marginBlockEnd: 0, marginBlockStart: 0, marginBottom: 0.008 * innerHeight, fontWeight: '500' }}>{props.name}</h3>
                    {/* <p style={{ color: ' #8D624C', margin: 0 }}>{props.title}</p> */}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginRight: 0.03 * innerWidth }}>
                    <img src={Dots} alt='' width={29} height={29} />
                </div>
            </div>
            <div className='chat__body' style={{ height: 0.8 * innerHeight,overflowY:'auto' }}>
                {props.chat?.map((item, index) => {
                    return (
                        <>
                            {userId === item.sender_id && item.message && <div className='message-section'>
                                <p className='chat__message chat_reciever'>

                                    {userId === item.sender_id && item.message}
                                </p>
                                <span className='chat_name span_chat_date'>{item.created_on.split('T')[0]}</span>

                            </div>}

                            {userId !== item.sender_id && item.message && <div className='message-section'>
                                <div className='img_and_chat_div'>
                                    {/* <img src={cleaner} alt='ddd' /> */}
                                    <p className='chat__message'>
                                        {/* {item.user_id === item.senderId && item.message} */}
                                        {userId !== item.sender_id && item.message}
                                    </p>
                                </div>
                                <span className='span_chat_date_from'>{item.created_on.split("T")[0]}</span>

                            </div>}
                        </>
                    )
                })}

                <div className='chat_footer' style={{ position: "absolute", top: 0.9 * innerHeight, backgroundColor:'white',height:93,}}>
                    <input style={{ backgroundColor: "white", borderColor: '#D1D3D6', borderRadius: 7, borderWidth: 1, borderStyle: 'solid', width: 0.57 * innerWidth, height: 40, paddingLeft: 20 }} onChange={(e) => setValiue(e.target.value)} placeholder={'Write your message...'} />

                    {/* <div style={{ height: "76vh" }}> */}
                    {/* <GiftedChat
                        renderInputToolbar={()=>renderInput()}
                            messages={"jshgdjasgdjasg"}
                            placeholder=
                            onSend={(messages) => onSend(messages)}
                            user={{
                                id: 1
                            }}
                        /> */}
                    {/* </div> */}

                    <button className='chat_footer_button'>Send</button>
                </div>
            </div>
        </>
    )
}

export default Chat