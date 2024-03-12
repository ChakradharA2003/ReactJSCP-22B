import {Component} from 'react'

import './index.css'

/*
const blogData = {
  title: 'Blog Name',
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/placeholder-3-img.png',
  avatarUrl: 'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
  author: 'Author Name',
  content:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}
*/

class BlogItemDetails extends Component {
  state = {
    blogDetail: {},
  }

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      author: data.author,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      topic: data.topic,
      content: data.content,
    }
    this.setState({blogDetail: updatedData})
  }

  renderBlogItemDetails = () => {
    const {blogDetail} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogDetail
    return (
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>

        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    return <div className="blog-container">{this.renderBlogItemDetails()}</div>
  }
}

export default BlogItemDetails
