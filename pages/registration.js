import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

class Registration extends React.Component {
  render() {
    return (
      <BaseLayout>
        <BasePage className="registration-page">
          <h1>Registration page</h1>
        </BasePage>        
      </BaseLayout>      
    )
  }
}

export default Registration
