import { Summary } from "../summaryFolder/index";
import { TransactionTable } from "../tableFolder";
import { Container } from "./styles";


export function Dashboard() {
    return(
        <Container>
            <Summary></Summary>
            <TransactionTable></TransactionTable>
        </Container>
    );
}