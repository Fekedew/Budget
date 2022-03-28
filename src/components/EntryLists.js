import React from "react";
import { Container } from "semantic-ui-react";
import ListHistory from "./ListHistory";

function EntryLists({entities, deletEntry}) {
    return (
        <Container>
            {entities.map( (entry) =>  (
                <ListHistory key={entry.id} {...entry} deletEntry={deletEntry} />
            ))};
        </Container>
    );
}

export default EntryLists;