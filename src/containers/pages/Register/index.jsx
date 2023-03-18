import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import "./register.scss"
import Button from "../../../components/atom/Button"
import { registerUserAPI } from "../../../config/redux/action"

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const { isLoading } = useSelector((store) => store.index)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const dataUser = await dispatch(
      registerUserAPI({ email, password })
    ).unwrap()

    if (dataUser) {
      setEmail("")
      setPassword("")
    }
  }

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <p className="auth-title">Register page</p>

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
        <Button title="Register" type="submit" loading={isLoading} />
      </form>
    </div>
  )
}
export default Register
