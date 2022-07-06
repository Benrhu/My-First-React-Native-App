import { FlatList, StyleSheet, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import Jobs from './jobs';

const JobList = () => {
    return (
        <View>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Position</DataTable.Title>
                    <DataTable.Title>Company</DataTable.Title>
                    <DataTable.Title>Description</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                    <DataTable.Cell>Software Engineer</DataTable.Cell>
                    <DataTable.Cell>Google</DataTable.Cell>
                    <DataTable.Cell>You gonna be the best.</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>Junior Engineer</DataTable.Cell>
                    <DataTable.Cell>OB</DataTable.Cell>
                    <DataTable.Cell>You are the best.</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>Senior Engineer</DataTable.Cell>
                    <DataTable.Cell>Facebook</DataTable.Cell>
                    <DataTable.Cell>You gonna be the best.</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    row: {
       width: '100px',
       paddingHorizontal: 10,
    },
    item: {
        padding: 10,
        border: "1px solid black",
        color: "black",
    },
    table: {
        width: "100px",
    }
});


export default JobList;