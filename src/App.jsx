import { ClicksCounter } from '../components/ClicksCounter/ClicksCounter'
import { MirrorInput } from '../components/MirrorInput/MirrorInput'
import './App.css'
import { LoginForm } from '../components/LoginForm/LoginForm'
import { ToggleText } from '../components/ToggleText/ToggleText'
import { DoubleClickCounter } from '../components/DoubleClickCounter/DoubleClickCounter'
import { HoverBox } from '../components/HoverBox/HoverBox'

export const App = () => {
  return (
    <>
    <h1>React - Events</h1>
    
    <ClicksCounter />

    <MirrorInput />

    <LoginForm />

    <ToggleText />

    <DoubleClickCounter />

    <HoverBox />
    </>
  )
}

export default App
