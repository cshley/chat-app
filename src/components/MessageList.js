import React from 'react'


const DUMMY_DATA = [
    {
        senderID: 'chloe',
        texts: "hellooo"
    },

    {
        senderID: 'cal',
        texts: "wooop"
    },

    {
        senderID: 'meg',
        texts: "heyhey"
    }
]


class MessageList extends React.Component {
    render() {
        return (
        <div className="message-list">
        {DUMMY_DATA.map((message, index) => {
            console.log(message)
            return (
                <div key={index} className="message">
                <div className="message-username">{message.senderID}</div>
                <div className="message-text">{message.texts}</div>
                </div>
            )
        })}
            </div>
        )
    }
}

export default MessageList;