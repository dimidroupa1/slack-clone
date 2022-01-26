import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Button from "@material-ui/core/Button"
import { auth, db } from '../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

function ChatInput({ channelName, channelId, chatRef }) {

    const [input, setInput] = useState('');

    const [user] = useAuthState(auth);

    const sendMessage = (e) => {
        e.preventDefault();

        
        if(!channelId){
            return false
        }
        console.log(channelId)
        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL
        });

        chatRef?.current?.scrollIntoView({
            behavior: "smooth"
        });

        setInput('');
    };

    return (
        <ChatInputContainer>
            <form>
                <input 
                value={input} 
                placeholder={`Message #${channelName}`} 
                onChange={(e) => setInput(e.target.value)}
                />
                <Button hidden type="submit" onClick={sendMessage}>
                    Send
                </Button>
            </form>
        </ChatInputContainer>
    );
}

export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius: 20px;
    flex: 0.7;
    padding: 20px;
    > form {
        position: relative;
        justify-content: center;
        flex: 1;
        > input {
            position: fixed;
            bottom: 30px;
            width: 60%;
            border: 1px solid gray;
            border-radius: 3px;
            padding: 20px;
            outline: none;
        }
        > button {
            display: none !important;
        }
    }
`;
