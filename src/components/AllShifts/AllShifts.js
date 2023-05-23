import {View, Text, ScrollView} from 'react-native';
import {styles} from './AllShiftsStyleSheet';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';


const AllShifts = () => {

    const tableHead = ['Date', 'Start', 'End', 'Time'];
    const tableData = [
        ['1', '2', '3', '4'],
        ['4', '5', '6', '7'],
        ['7', '8', '9', '4'],
    ];


    return (
        <>
            <View style={styles.container}>
                <ScrollView>
                    <Table borderStyle={styles.border}>
                        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
                        <Rows data={tableData} textStyle={styles.text} />
                    </Table>
                </ScrollView>
                
            </View>
        </>
    );
}

export default AllShifts;