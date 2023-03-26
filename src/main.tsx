import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './context/auth/AuthProvider'

import { ChatApp } from './ChatApp'
import './index.css'
import { ChatProvider } from './context/chat/ChatProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ChatProvider>
        <AuthProvider>
            <ChatApp />
        </AuthProvider>
    </ChatProvider>

)
