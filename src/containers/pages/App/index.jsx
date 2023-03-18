import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "../Dashboard"
import Login from "../Login"
import Register from "../Register"
import ProtectedPage from "../Protected"
import { Provider } from "react-redux"
import { store } from "../../../config/redux"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedPage>
                <Dashboard />
              </ProtectedPage>
            }
          />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
