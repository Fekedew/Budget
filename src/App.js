import "./App.css";
import React, { useState } from "react";
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
import EntryLists from "./components/EntryLists";


function App() {
  const [entities, setEntities] = useState(initialValues)

  const deletEntry = (id) => {
    const result = entities.filter((entry) => entry.id !== id);
    setEntities(result);
  }

  const addEntry = (message, value) => {
    const restult = entities.concat({id: entities.length+1, message, value})
    setEntities(restult)
  }

  return (
    <Container>
      <MainHeader title="Budget App1" />
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

      <EntryLists entities={entities} deletEntry={deletEntry} />
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm addEntry={addEntry}/>
    </Container>
  );
}

export default App;

const initialValues = [
  {id:1, message:"Remot work", value:"$6,212.00", isExpense:false},
  {id:2, message:"Unlimited internet data", value:"$212.00", isExpense:true},
  {id:3, message:"CBE is traine work", value:"$4,212.00", isExpense:false}
]