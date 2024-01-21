import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

import './styles/components/app.sass'


function App() {
  return (
    <>
      <div id="portifolio">
        <h1>Luiz Ernandes</h1>
        <Sidebar />
        <MainContent />
      </div>
    </>
  )
}

export default App
