import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

const Dashboard = () => {
  const { testState } = useSelector((store) => store.index)

  return (
    <div>
      <p>Dashboard page {testState}</p>
      <Link to={"/register"}>
        <button>Go to Register</button>
      </Link>
      <Link to={"/login"}>
        <button>Go to Login</button>
      </Link>
    </div>
  )
}
export default Dashboard
