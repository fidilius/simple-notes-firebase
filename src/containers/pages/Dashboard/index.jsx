import "./dashboard.scss"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addDataToAPI, getDataFromAPI } from "../../../config/redux/action"

const Dashboard = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const dispatch = useDispatch()
  const { notes } = useSelector((store) => store.index)

  const userData = JSON.parse(localStorage.getItem("userData"))

  useEffect(() => {
    dispatch(getDataFromAPI(userData.uid))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (userData && title && content) {
      const objDate = new Date()
      const date = objDate.getTime()
      addDataToAPI({ date, title, content, userId: userData.uid })
      dispatch(getDataFromAPI(userData.uid))
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

      {!notes ? (
        <h3>loading...</h3>
      ) : (
        notes.map((note) => {
          const { title, content, date } = note
          const newDate = new Date(Number(date))
          return (
            <div className="card-content" key={date}>
              <p className="title">{title}</p>
              <p className="date">{newDate.toLocaleDateString()}</p>
              <p className="content">{content}</p>
            </div>
          )
        })
      )}

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
