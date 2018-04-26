import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div style={{
    'display': 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'align-items': 'center',
  }}>
    <h1>Site en construction <span className='construction-woman'></span></h1>
    <img style={{ 'margin': 'auto' }} src='http://thecatapi.com/api/images/get?format=src&type=gif'/>
    {
      // <Link to="/page-2/">Go to page 2</Link>
    }
  </div>
)

export default IndexPage
