import { BrowserRouter } from "react-router-dom"
import { RegisterPage } from "./pages"
import { AppRouter } from "./router/AppRouter"

export const ChatApp = () => {
  return (
    <div>
        <BrowserRouter>
           <AppRouter />
        </BrowserRouter>
      
      </div>
  )
}
