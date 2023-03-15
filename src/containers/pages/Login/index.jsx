import "./login.scss"
import Button from "../../../components/atom/Button"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { asyncLogin } from "../../../config/redux/action"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const { isLoading } = useSelector((store) => store.index)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const test = await dispatch(asyncLogin({ email, password }))

    console.log("test: ", test)
  }

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <p className="auth-title">Login page</p>
        <input
          className="input"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Login" type="submit" loading={isLoading} />
      </form>
    </div>
  )
}
export default Login
