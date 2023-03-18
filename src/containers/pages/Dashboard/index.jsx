import "./dashboard.scss"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { addDataToAPI, readDataAPI } from "../../../config/redux/action"

const Dashboard = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const { user } = useSelector((store) => store.index)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (user && title && content) {
      const objDate = new Date()
      const date = objDate.getTime()
      addDataToAPI({ date, title, content, userId: user.uid })
    } else {
      console.log("something went wrong")
    }
  }

  return (
    <div className="container">
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          className="input-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="content"
          className="input-content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit" className="save-btn">
          Simpan
        </button>
      </form>

      <div className="card-content">
        <p className="title">Title</p>
        <p className="date">17 Mar 2023</p>
        <p className="content">Content Notes</p>
      </div>

      {/* <Link to={"/register"}>
        <button>Go to Register</button>
      </Link>
      <Link to={"/login"}>
        <button>Go to Login</button>
      </Link> */}
    </div>
  )
}
export default Dashboard
