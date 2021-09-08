import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import data from './data.json'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../Header'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="data-box">
          {data.map(post=>{
            return(
            <div className="data-design">
              <h3>User Id : { post.userId }</h3>
              <h3>Id : { post.id }</h3>
              <p> <span className="key">Title : </span>{ post.title }</p>
              <p><span className="key">Body : </span>{ post.body }</p>
            </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home
