import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm  from './conponents/ContactForm'
import SearchBox from './conponents/SearchBox'
import ContactList from './conponents/ContactList'

// v 1. 왼쪽에 연락처 등록하는 폼이 있고 오른쪽에는 연락처 리스트와 search 창이 있다.
// 2. 리스트에 유저 이름과 전화번호를 추가 할 수 있다.
// 3. 리스트에 아이템이 몇개 있는지 보인다.
// 4. 사용자가 유저를 이름검색으로 찾을 수 잇다.


function App() {
  return (
     <Container>
       <h1 className='title'>연락처</h1>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <SearchBox />
            <ContactList />
          </Col>
        </Row>
     </Container>
  );
}

export default App;
