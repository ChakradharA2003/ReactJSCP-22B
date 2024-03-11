// Write your JS code here
import BlogItem from '../BlogItem/index'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  console.log(blogsList)
  return (
    <ul className="blogs-list">
      {blogsList.map(blog => (
        <BlogItem
          key={blog.id}
          title={blog.title}
          description={blog.description}
          publishedDate={blog.publishedDate}
        />
      ))}
    </ul>
  )
}
export default BlogList
