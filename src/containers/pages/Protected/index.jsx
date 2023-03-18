import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

const ProtectedPage = ({ children }) => {
  const { isLogin } = useSelector((store) => store.index)

  if (!isLogin) {
    return <Navigate to={"/login"} replace={true} />
  }

  return children
}
export default ProtectedPage
