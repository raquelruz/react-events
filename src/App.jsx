import { ClicksCounter } from '../components/ClicksCounter/ClicksCounter'
import { MirrorInput } from '../components/MirrorInput/MirrorInput'
import './App.css'
import { LoginForm } from '../components/LoginForm/LoginForm'
import { ToggleText } from '../components/ToggleText/ToggleText'

export const App = () => {
  return (
    <>
    <h1>React - Events</h1>
    
    <ClicksCounter />

    <MirrorInput />

    <LoginForm />

    <ToggleText />
    </>
  )
}

export default App
