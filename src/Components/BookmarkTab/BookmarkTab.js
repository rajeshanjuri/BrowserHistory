import './BookmarkTab.css'

const BookmarkTab = props => {
  const {historyList, deleteHistoryTab} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyList

  const onDeleteTab = () => {
    deleteHistoryTab(id)
  }

  return (
    <li className="list-item-container">
      <p className="time">{timeAccessed}</p>
      <div className="tab-conatiner">
        <div className="tab-content-container">
          <img src={logoUrl} alt="domain logo" className="web-img" />
          <div className="details-container">
            <p className="title">{title}</p>
            <p className="tab-url">{domainUrl}</p>
          </div>
        </div>
        <button
          type="button"
          className="delete-btn"
          onClick={onDeleteTab}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-logo"
          />
        </button>
      </div>
    </li>
  )
}

export default BookmarkTab
