import React from 'react'

import Header from './components/Header'
import Headline from './components/headline'
import SharedButton from './components/button'
import ListItem from './components/listItem'
import { connect } from 'react-redux'
import { fetchPosts } from './actions'
import './app.scss'

const tempArr = [
  {
    fName: 'Joe',
    lName: 'Doe',
    email: 'anemail@there.com',
    age: 25,
    onlineStatus: true,
  },
]

function App({ fetchPosts, posts }) {

  const fetch = () => {
    fetchPosts()
  }

  const configButton = {
    buttonText: 'Get Post',
    emitEvent: fetch
  }
  return (
    <div className="App" data-test="app">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to see posts"
          tempArr={tempArr}
        />
        <SharedButton {...configButton}/>
        {posts.length > 0 && 
          <div>
            {posts.map((post, index) => {
              const { title, body } = post
              const configListItems = {
                title,
                context: body
              }
              return <ListItem key={index} {...configListItems} />
            })}
          </div>
        }
      </section>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
  }
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(App)
