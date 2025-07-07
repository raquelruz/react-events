import { ClicksCounter } from '../components/ClicksCounter/ClicksCounter'
import { MirrorInput } from '../components/ClicksCounter/MirrorInput/MirrorInput'
import './App.css'

export const App = () => {
  return (
    <>
    <h1>React - Events</h1>
    
    <ClicksCounter />

    <MirrorInput />
    </>
  )
}

export default App
