import React from "react";
import { Container } from "semantic-ui-react";
import ListHistory from "./ListHistory";

function EntryLists({entities}) {
    return (
        <Container>
            {entities.map( (entry) =>  (
                <ListHistory message={entry.message} value={entry.value} isExpense={entry.isExpense} />
            ))};
        </Container>
    );
}

export default EntryLists;