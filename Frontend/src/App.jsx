import './App.css'
import ProtectedRoute from './components/protectedRoute'
import dashboard from './components/dashboard'
import HomePage from './components/homepage'

function App() {

  return (
    <>
      <ProtectedRoute path="/api/v1/dashboard" component={dashboard}/>
      <HomePage/>
    </>
  )
}

export default App
