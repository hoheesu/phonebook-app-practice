import React from 'react'
import { Form, Button } from 'react-bootstrap'

function ContactForm() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control type="text" placeholder="이름을 입력해주세요 ~" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>전화번호</Form.Label>
          <Form.Control type="" placeholder="전화번호를 입력해주세요 ~" maxLength={11} />
        </Form.Group>
        <Button variant="danger" type="submit">
          연락처 추가
        </Button>
      </Form>
    </div>
  )
}

export default ContactForm