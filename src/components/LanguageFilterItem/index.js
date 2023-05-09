// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageItem, changeActiveId, activeRepoId} = props

  const onClickLanguage = () => {
    changeActiveId(languageItem.id)
  }
  const activeButton =
    activeRepoId === languageItem.id
      ? 'activeLanguageBtn button-style-each-language'
      : 'button-style-each-language'

  return (
    <li className="each-language-style" value={languageItem.id}>
      <button className={activeButton} onClick={onClickLanguage} type="submit">
        {languageItem.language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
