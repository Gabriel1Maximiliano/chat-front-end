import { BrowserRouter } from "react-router-dom"
import { SocketProvider } from "./context/socket/SocketProvider"
import { RegisterPage } from "./pages"
import { AppRouter } from "./router/AppRouter"

export const ChatApp = () => {
  return (
    <div>
      <SocketProvider>
        <BrowserRouter>
           <AppRouter />
        </BrowserRouter>
        </SocketProvider>
      </div>
  )
}
