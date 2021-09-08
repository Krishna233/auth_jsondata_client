import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
        <div>
          <h2>Financepeer</h2>
        </div>

        <div>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
    </nav>
  )
}

export default withRouter(Header)
