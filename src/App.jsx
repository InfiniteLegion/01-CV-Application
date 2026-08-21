import './App.css'
import CvApplication from './components/CvApplication.jsx'
import CvPreview from './components/CvPreview.jsx'

function App() {

  return (
    <div className='app'>
      <div className="app-header">
        <h1 className='h1-app'>Resume Builder</h1>
      </div>

      <div className="cv-wrapper">
        <CvApplication />
        <CvPreview />
      </div>
    </div>
  )
}

export default App
