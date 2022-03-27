import "./App.css";
import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Button,
  Container,
  Form,
  Grid,
  Header,
  Icon,
  Segment,
  Statistic,
} from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import StatisticBalance from "./components/StatisticBalance";

function App() {
  return (
    <Container>
      <MainHeader title="Budget App" />
      <Statistic size="small">
        <Statistic.Label>Your balance: </Statistic.Label>
        <Statistic.Value>5,854.78 </Statistic.Value>
      </Statistic>
      <Segment textAlign="center" color="grey">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <StatisticBalance
                size="tiny"
                color="green"
                label="Income:"
                value="10,458.50"
              />
            </Grid.Column>
            <Grid.Column>
              <StatisticBalance
                size="tiny"
                color="red"
                label="Expenses:"
                value="4,200.54"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <MainHeader type="h3" title="History" />
      <Segment color="red">
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $10,00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="black">
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something else
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $100,00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="green">
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something new
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $20,00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
