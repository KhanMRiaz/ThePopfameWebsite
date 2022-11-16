import React, { useState } from 'react'
import Dots from '../Assets/Services/Dots.png'
import './ChatBox.css'
import { GiftedChat } from "react-web-gifted-chat";
import { useSelector } from 'react-redux';
import './Chat.css'

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
            <div className='chat-header-section'>
                <img src={props.image} width={74} height={74}/>
                <div className='chat-header-section-name'>
                    <h3>{props.name}</h3>
                </div>
                <div className='chat-header-section-dots'>
                    <img src={Dots} alt='' width={29} height={29} />
                </div>
            </div>
            <div className='chat__body'>
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

                <div className='chat_footer'>
                    <input onChange={(e) => setValiue(e.target.value)} placeholder={'Write your message...'} />

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
console.log("🚀 ~ file: Chat.js ~ line 94 ~ Chat ~ Chat", Chat)

export default Chat