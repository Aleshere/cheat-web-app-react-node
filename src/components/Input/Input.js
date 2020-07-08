import React from 'react';
import './Input.css';

const Input = ({ message, setMessage, sendMessage }) => (
    <form className="form">
        <input
        type="text"
        className="input"
        placeholder='Type a message...'
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button
        className='sendButton'
        onClick={(event) => sendMessage(event)}>Send</button>
    </form>
)

export default Input;