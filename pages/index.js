import React from 'react'

import BaseLayout from '../components/layouts/BaseLayout'
import { Container, Row, Col } from 'reactstrap'


class Index extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {

    return (
      <BaseLayout className="cover">
        <div className="pt-150">
          <Container>
            <Row className="justify-content-center">
              <Col md="6">
                Text
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    )
  }
}

export default Index
