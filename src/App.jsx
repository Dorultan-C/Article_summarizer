
import Hero from './components/Hero'
import Demo from './components/Demo'
import '../src/App.css'


const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient"/>
      </div>
      <div className="app">
        <Demo/>
        <Hero/>
      </div>
    </main>
     
  )
}

export default App