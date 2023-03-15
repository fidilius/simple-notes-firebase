const Button = ({ type, title, loading }) => {
  if (loading) {
    return <button className="btn disabled">loading...</button>
  }

  return (
    <button className="btn" type={type}>
      {title}
    </button>
  )
}
export default Button
