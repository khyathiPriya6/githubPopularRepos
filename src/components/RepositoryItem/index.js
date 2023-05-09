// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repoDetails} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = repoDetails
  return (
    <li className="repo-item">
      <div className="img-container">
        <img src={avatarUrl} alt="name" className="img-style" />
      </div>
      <h1 className="repo-name">{name}</h1>
      <div className="repo-details">
        <div className="each-repo-details">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="repo-details-img"
          />
          <p className="repo-details-para">{starsCount} stars</p>
        </div>
        <div className="each-repo-details">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="repo-details-img"
          />
          <p className="repo-details-para">{forksCount} forks</p>
        </div>
        <div className="each-repo-details">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="repo-details-img"
          />
          <p className="repo-details-para">{issuesCount} open issues</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
