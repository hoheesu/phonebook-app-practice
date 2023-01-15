import React from 'react'
import {Row, Col} from 'react-bootstrap'

function ContactItem({ item }) {
  return (
    <Row>
      <Col lg={1}>
        <img width={45} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"/>
      </Col>
      <Col lg={11}>
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
      </Col>
    </Row>
  )
}

export default ContactItem