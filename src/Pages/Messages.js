import React, { useEffect, useState } from 'react'
import Search from '../Assets/Services/Search.png'
import Avatar from '../Assets/Services/Avatar.png'
import Avatar2 from '../Assets/Services/Avatar2.png'
import Avatar3 from '../Assets/Services/Avatar3.png'
import SideBarChat from '../Component/sideBarChat'
import ArrowLeft from '../Assets/Services/ArrowLeft.png'
import Chat from '../Component/Chat'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { chatAction, success } from '../Redux/Actions/chatAction'
import axios from 'axios'
import { baseURL } from '../Redux/Actions/serviceAction'
import { BallTriangle } from 'react-loader-spinner'
import './Messages.css'

const Messages = () => {
    const token = useSelector((state) => state?.user?.user?.data.token)
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        getMesaages()
    }, [])
    const dispatch = useDispatch()
    // const chatMessages = useSelector((state) => state.chat?.chat)
    const [messages, setMessages] = useState()
    const [bidsWithMessages, setBidsWithMessages] = useState([])

    useEffect(() => {
        // chatMessages?.map((item) => {
        //     item.bids?.map((bidsItem) => {
        //         setMessages(bidsItem?.messages)
        //     })
        // })
    }, [])
    const getMesaages = async () => {
        const getConfig = () => {
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };
            return config
        }

        try {
            setLoader(true)
            const res = await axios.post(baseURL + '/api/job/get_jobs_with_messages', {}, getConfig())
            console.log("========res", res)
            res.data.data?.map((item) => {

                item.bids?.map((bidsItem) => {
                    if (bidsItem.messages.length > 0) {
                        bidsWithMessages.push(bidsItem)
                        bidsWithMessages.map((bidItem) => {
                            setChat(bidItem?.user)
                        })
                    }
                    console.log('oiascda: ', bidsItem)
                })
            })
            dispatch(success(res));
            setLoader(false)
        }
        catch (e) {
            setLoader(false)
            console.log('err: ', e)

        }
    }

    const [chat, setChat] = useState({})
    const { innerHeight, innerWidth } = window
    // const messages = [
    //     {
    //         image: Avatar,
    //         name: 'John',
    //         lastMessage: 'We have lake-front vaction rentals. No specific liability.',
    //         time: '11:30',
    //         title: 'Electrician',
    //         chat: [
    //             {
    //                 senderId: 2,
    //                 receiverId: 1,
    //                 date: '3 days ago',
    //                 message: 'Hi How Are You?',
    //                 user_id: 1,
    //             }
    //         ],
    //     },
    //     {
    //         image: Avatar,
    //         name: 'Alex',
    //         lastMessage: 'We have lake-front vaction rentals. No specific liability.',
    //         time: '11:30',
    //         title: 'Cleaner',
    //         chat: [
    //             {
    //                 senderId: 2,
    //                 receiverId: 1,
    //                 date: '3 days ago',
    //                 message: 'Hi How Are You?',
    //                 user_id: 1,
    //             }
    //         ],

    //     },
    //     {
    //         image: Avatar,
    //         name: 'Jake Martin',
    //         lastMessage: 'We have lake-front vaction rentals. No specific liability.',
    //         time: '11:30',
    //         title: 'Mechanic',
    //         chat: [
    //             {
    //                 senderId: 2,
    //                 receiverId: 1,
    //                 date: '3 days ago',
    //                 message: 'Hi How Are You?',
    //                 user_id: 1,
    //             }
    //         ],

    //     },
    //     {
    //         image: Avatar2,
    //         name: 'Brooklyn',
    //         lastMessage: 'We have lake-front vaction rentals. No specific liability.',
    //         time: '11:30',
    //         title: 'Driver',
    //         chat: [
    //             {
    //                 senderId: 2,
    //                 receiverId: 1,
    //                 date: '3 days ago',
    //                 message: 'Hi How Are You?',
    //                 user_id: 1,
    //             }
    //         ],
    //     },
    //     {
    //         image: Avatar3,
    //         name: 'Steve',
    //         lastMessage: 'We have lake-front vaction rentals. No specific liability.',
    //         time: '11:30',
    //         title: 'Sweeper',
    //         chat: [
    //             {
    //                 senderId: 2,
    //                 receiverId: 1,
    //                 date: '3 days ago',
    //                 message: 'Hi How Are You?',
    //                 user_id: 1,
    //             }
    //         ],


    //     },
    //     {
    //         image: Avatar2,
    //         name: 'Paul',
    //         lastMessage: 'We have lake-front vaction rentals. No specific liability.',
    //         time: '11:30',
    //         title: 'House Keeping',
    //         chat: [
    //             {
    //                 senderId: 2,
    //                 receiverId: 1,
    //                 date: '3 days ago',
    //                 message: 'Hi How Are You?',
    //                 user_id: 1,
    //             }
    //         ],

    //     },
    //     {
    //         image: Avatar2,
    //         name: 'Bruce',
    //         lastMessage: 'We have lake-front vaction rentals. No specific liability.',
    //         time: '11:30',
    //         title: 'Dev',
    //         chat: [
    //             {
    //                 senderId: 2,
    //                 receiverId: 1,
    //                 date: '3 days ago',
    //                 message: 'Hi How Are You?',
    //                 user_id: 1,
    //             }
    //         ],

    //     },
    //     {
    //         image: Avatar3,
    //         name: 'Morpheus',
    //         lastMessage: 'We have lake-front vaction rentals. No specific liability.',
    //         time: '11:30',
    //         title: 'Cleaner',

    //     },
    //     {
    //         image: Avatar3,
    //         name: 'Tony',
    //         lastMessage: 'We have lake-front vaction rentals. No specific liability.',
    //         time: '11:30',
    //         title: 'Cleaner',

    //     },
    //     {
    //         image: Avatar2,
    //         name: 'Vigo',
    //         lastMessage: 'We have lake-front vaction rentals. No specific liability.',
    //         time: '11:30',
    //         title: 'Cleaner',

    //     },
    //     {
    //         image: Avatar3,
    //         name: 'Braden',
    //         lastMessage: 'We have lake-front vaction rentals. No specific liability.',
    //         time: '11:30',
    //         title: 'Cleaner',

    //     },

    // ]
    console.log("====messages===", messages)

    const handleClickOnChat = (item) => {
        setChat(item)
    }
    let getImage = (user) => {
        return baseURL + '/api/request_images/' + user.profile_picture
    }
    // useEffect(() => {
    //     bidsWithMessages.map((bidItem) => {
    //         setChat(bidItem?.user)
    //     })
    // }, [bidsWithMessages])
    return (
        <>
            {/* {loader ?
                <div className='loader-BallTriangle'>
                    <BallTriangle color={'#8D624C'} width={100} height={100} />
                </div>
                : */}
                <div className='ChatScreen-main-container'>
                    <div className='sideBarChatScreen-main-container'>
                        <div className='ChatScreen-inner-section'>
                            <div className='ChatScreen-backbtn-section'>
                                <Link className='chatsection-back-btn' to={'/'}>
                                    <div className='chatsection-back-btn-inner'>
                                        <div className='back-btn-arrow'>
                                            <img src={ArrowLeft} width={17} height={17} />
                                        </div>
                                        <div className='back-btn-arrow-text'>
                                            BACK
                                        </div>
                                    </div>
                                </Link>
                                <div className='messages-btn'>
                                    Messages
                                </div>
                            </div>
                            <div className='chatsection-search-input'>
                                <div className='searchLogo' >
                                    <img src={Search} />
                                </div>
                                <input className='chatsection-input' placeholder={'Search'} />
                            </div>
                            <div className='two-btn-container'>
                                <button className='two-btn-container-first'>All</button>
                                <button className='two-btn-container-snd' >Unread</button>
                            </div>
                            <div className='sidebar-messages-section'>
                                {
                                    bidsWithMessages?.map((item, index) => {
                                        return (
                                            <SideBarChat onClick={() => {
                                                setMessages(item.messages)
                                                handleClickOnChat(item.user)
                                            }
                                            } name={item.user.first_name + item.user.last_name} lastMessage={item.messages[item.messages.length - 1]?.message} time={item.messages[item.messages.length - 1].created_on} image={getImage(item.user)} job_id={item.job_id} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='Chat-section'>
                            <Chat name={chat?.first_name + chat.last_name} userId={chat.id} image={getImage(chat)} title={"Title"} chat={messages} />
                        </div>
                    </div>
                </div>
                {/* } */}
        </>
    )
}

export default Messages