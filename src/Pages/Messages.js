import React, { useEffect, useState } from 'react'
import Search from '../Assets/Services/Search.png'
import Avatar from '../Assets/Services/Avatar.png'
import Avatar2 from '../Assets/Services/Avatar2.png'
import Avatar3 from '../Assets/Services/Avatar3.png'
import SideBarChat from '../Component/sideBarChat'
import ArrowLeft from '../Assets/Services/ArrowLeft.png'
import Chat from '../Component/Chat'
import { Link } from 'react-router-dom'

const Messages = () => {
    const [chat, setChat] = useState({})
    const { innerHeight, innerWidth } = window
    const messages = [
        {
            image: Avatar,
            name: 'John',
            lastMessage: 'We have lake-front vaction rentals. No specific liability.',
            time: '11:30',
            title: 'Electrician',
            chat: [
                {
                    senderId: 2,
                    receiverId: 1,
                    date: '3 days ago',
                    message: 'Hi How Are You?',
                    user_id: 1,
                }
            ],
        },
        {
            image: Avatar,
            name: 'Alex',
            lastMessage: 'We have lake-front vaction rentals. No specific liability.',
            time: '11:30',
            title: 'Cleaner',
            chat: [
                {
                    senderId: 2,
                    receiverId: 1,
                    date: '3 days ago',
                    message: 'Hi How Are You?',
                    user_id: 1,
                }
            ],

        },
        {
            image: Avatar,
            name: 'Jake Martin',
            lastMessage: 'We have lake-front vaction rentals. No specific liability.',
            time: '11:30',
            title: 'Mechanic',
            chat: [
                {
                    senderId: 2,
                    receiverId: 1,
                    date: '3 days ago',
                    message: 'Hi How Are You?',
                    user_id: 1,
                }
            ],

        },
        {
            image: Avatar2,
            name: 'Brooklyn',
            lastMessage: 'We have lake-front vaction rentals. No specific liability.',
            time: '11:30',
            title: 'Driver',
            chat: [
                {
                    senderId: 2,
                    receiverId: 1,
                    date: '3 days ago',
                    message: 'Hi How Are You?',
                    user_id: 1,
                }
            ],
        },
        {
            image: Avatar3,
            name: 'Steve',
            lastMessage: 'We have lake-front vaction rentals. No specific liability.',
            time: '11:30',
            title: 'Sweeper',
            chat: [
                {
                    senderId: 2,
                    receiverId: 1,
                    date: '3 days ago',
                    message: 'Hi How Are You?',
                    user_id: 1,
                }
            ],


        },
        {
            image: Avatar2,
            name: 'Paul',
            lastMessage: 'We have lake-front vaction rentals. No specific liability.',
            time: '11:30',
            title: 'House Keeping',
            chat: [
                {
                    senderId: 2,
                    receiverId: 1,
                    date: '3 days ago',
                    message: 'Hi How Are You?',
                    user_id: 1,
                }
            ],

        },
        {
            image: Avatar2,
            name: 'Bruce',
            lastMessage: 'We have lake-front vaction rentals. No specific liability.',
            time: '11:30',
            title: 'Dev',
            chat: [
                {
                    senderId: 2,
                    receiverId: 1,
                    date: '3 days ago',
                    message: 'Hi How Are You?',
                    user_id: 1,
                }
            ],

        },
        {
            image: Avatar3,
            name: 'Morpheus',
            lastMessage: 'We have lake-front vaction rentals. No specific liability.',
            time: '11:30',
            title: 'Cleaner',

        },
        {
            image: Avatar3,
            name: 'Tony',
            lastMessage: 'We have lake-front vaction rentals. No specific liability.',
            time: '11:30',
            title: 'Cleaner',

        },
        {
            image: Avatar2,
            name: 'Vigo',
            lastMessage: 'We have lake-front vaction rentals. No specific liability.',
            time: '11:30',
            title: 'Cleaner',

        },
        {
            image: Avatar3,
            name: 'Braden',
            lastMessage: 'We have lake-front vaction rentals. No specific liability.',
            time: '11:30',
            title: 'Cleaner',

        },

    ]
    const handleClickOnChat = (item) => {
        setChat(item)
    }
    useEffect(() => {
        setChat(messages[0])
    }, [])
    return (
        <>
            <div style={{ height: innerHeight, width: innerWidth, display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                <div style={{ width: 0.9 * innerWidth, height: 0.9 * innerHeight, alignItems: "center", flexDirection: 'row', display: 'flex' }}>
                    <div style={{ width: 0.25 * innerWidth, height: 0.9 * innerHeight, backgroundColor: 'white' }}>
                        <div style={{ width: 0.18 * innerWidth, height: 0.1 * innerHeight, display: "flex", flexDirection: 'row', paddingTop: 50, alignItems: 'center' }}>
                            <Link to={'/'} style={{textDecorationLine:'none'}}>
                                <div style={{ backgroundColor: '#F4F5F6', width: 82.27, height: 37.4, alignItems: "center", display: 'flex', borderRadius: 7, marginLeft: 15, display: "flex", flexDirection: 'row' }}>
                                    <div style={{ display: "flex", alignItems: 'center', paddingLeft: 8 }}>
                                        <img src={ArrowLeft} width={17} height={17} />
                                    </div>
                                    <div style={{ color: 'black ', fontSize: 11, fontWeight: "400", paddingLeft: 4 }}>
                                        BACK
                                    </div>
                                </div>
                            </Link>
                            <div style={{ fontWeight: '700', fontSize: 20, color: "black", paddingLeft: 20 }}>
                                Messages
                            </div>
                        </div>
                        <div style={{ width: 0.19 * innerWidth, height: 0.08 * innerHeight, marginLeft: 15, display: "flex", alignItems: 'center' }}>
                            <div style={{ position: "absolute", marginTop: 3, marginLeft: 10 }}>
                                <img src={Search} />
                            </div>
                            <input style={{ backgroundColor: 'white', borderRadius: 7, borderColor: '#E8EAED', borderWidth: 1, borderStyle: 'solid', width: '100%', height: 37, paddingLeft: 30 }} placeholder={'Search'} />
                        </div>
                        <div style={{ marginLeft: 10, display: 'flex' }}>
                            <button style={{ margin: 0.01 * innerHeight, height: 25, backgroundColor: '#8D624C', color: '#fff', border: 'none', borderRadius: 7, width: 44 }}>All</button>
                            <button style={{ margin: 0.01 * innerHeight, height: 25, backgroundColor: '#F1F3F5', color: '#828385', border: 'none', borderRadius: 7, width: 83 }}>Unread</button>
                        </div>
                        <div style={{ overflowY: 'auto', height: 0.6 * innerHeight, }}>
                            {
                                messages.map((item, index) => {
                                    return (
                                        <SideBarChat onClick={() => handleClickOnChat(item)} name={item.name} lastMessage={item.lastMessage} time={item.time} image={item.image} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div style={{ height: 0.9 * innerHeight, width: 0.73 * innerWidth, flexDirection: 'column', display: 'flex', placeSelf: 'flex-end' }}>
                        <Chat name={chat?.name} image={chat?.image} title={chat?.title} chat={chat.chat} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Messages