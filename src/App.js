import React from "react";
import { Container, Segment, Image, Header, Icon } from "semantic-ui-react";
import logo from "./logo.png";
import "./App.scss";

function App() {
  return (
		<Container>
			<Segment basic padded='very'>
			  <Image src={logo} size="medium" centered />
			  <Header textAlign="center">Maverick AI - React boilerplate</Header>
			</Segment>
			<Segment basic>
				<Header icon textAlign="center" as='h1'>
					<Icon name="quote left"/>
					First, solve the problem. Then, write the code.
				</Header>
			</Segment>
		</Container>
  );
}

export default App;