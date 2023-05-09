import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    repoList: [],
    isLoading: false,
    activeRepoId: languageFiltersData[0].id,
  }

  componentDidMount() {
    this.getReoItems()
  }

  renderRepoList = () => {
    const {repoList} = this.state
    return repoList.map(repoDetails => (
      <RepositoryItem repoDetails={repoDetails} />
    ))
  }

  getReoItems = async () => {
    this.setState({isLoading: true})
    const {activeRepoId} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeRepoId}`
    const response = await fetch(apiUrl)
    if (response.ok) {
      const fetchData = await response.json()
      const changeData = fetchData.popular_repos.map(eachRepo => ({
        name: eachRepo.name,
        id: eachRepo.id,
        issuesCount: eachRepo.issues_count,
        forksCount: eachRepo.forks_count,
        starsCount: eachRepo.stars_count,
        avatarUrl: eachRepo.avatar_url,
      }))
      this.setState({repoList: changeData, isLoading: false})
    }
  }

  changeActiveId = id => {
    this.setState({activeRepoId: id}, this.getReoItems)
    console.log(this.state)
  }

  renderFailureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
    </div>
  )

  renderLoadingView = () => (
    <div data-testid="loader" className="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading, activeRepoId} = this.state
    return (
      <div>
        <h1 className="popular-heading">Popular</h1>
        <ul className="languages-list">
          {languageFiltersData.map(languageItem => (
            <LanguageFilterItem
              languageItem={languageItem}
              changeActiveId={this.changeActiveId}
              activeRepoId={activeRepoId}
              key={languageItem.id}
            />
          ))}
        </ul>
        {isLoading ? (
          this.renderLoadingView()
        ) : (
          <ul className="repo-items-list">{this.renderRepoList()}</ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
