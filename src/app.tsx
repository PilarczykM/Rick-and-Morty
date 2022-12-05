import './app.css'
import { Characters } from './components/Characters'

export function App() {

  return (
    <div className="App">
      <div className="container">
        <h1>Rick and Morty</h1>
        <Characters />
      </div>
    </div>
  )
}
