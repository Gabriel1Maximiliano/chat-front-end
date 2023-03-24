import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './auth/AuthProvider'

import { ChatApp } from './ChatApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <AuthProvider>
        <ChatApp />
    </AuthProvider>

)
