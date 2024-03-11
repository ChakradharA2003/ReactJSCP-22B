// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {title, description, publishedDate} = props
  return (
    <li className="list-container">
      <div className="title-date">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}
export default BlogItem
