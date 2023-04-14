
import './App.css';



function App() {

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default App
