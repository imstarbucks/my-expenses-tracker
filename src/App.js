/* Bootstrap */
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

/* Style */
import './main.scss';

/* Component */
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'

/* Context */
import { GlobalProvider } from './context/GlobalState'


function App() {
  return (
	  <GlobalProvider>

		<Container>
			<Row className="justify-content-center
								px-2">
				<Col
				md={8}
				lg={10}>
					<div>
						<Header/>
					</div>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col
				xs={10}
				md={8}
				lg={5}
				xl={4}
				>
					<Balance />
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col
				xs={10}
				md={8}
				lg={5}
				xl={4}>
					<IncomeExpenses />
				</Col>
			</Row>
			<Container>
				<Row className="justify-content-center">
					<Col
					xs={10}
					md={8}
					lg={5}
					xl={4}>
						<TransactionList />
					</Col>
				</Row>
			</Container>
			<Container>
				<Row className="justify-content-center">
					<Col
					xs={10}
					md={8}
					lg={5}
					xl={4}>
						<AddTransaction />
					</Col>
				</Row>
			</Container>
		</Container>
	  </GlobalProvider>
  );
}

export default App;
