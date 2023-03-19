import { Navigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { login } from "../../../config/redux/reducer"

const ProtectedPage = ({ children }) => {
  const dispatch = useDispatch()

  const userData = localStorage.getItem("userData")

  if (userData) {
    dispatch(login())

    return children
  }

  return <Navigate to={"/login"} replace={true} />
}
export default ProtectedPage
