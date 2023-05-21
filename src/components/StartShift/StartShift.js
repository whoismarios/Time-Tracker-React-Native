import {View, Text, Pressable} from 'react-native';
import { useState, useEffect } from 'react';
import {styles} from './StartShiftStyleSheet';
import moment from 'moment';
import 'moment/locale/de';
import DateTimePicker from '@react-native-community/datetimepicker';



const StartShift = () => {

    const [currentTime, setCurrentTime] = useState('');

    const [date, setDate] = useState(new Date());
   
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShowPicker(Platform.OS === 'ios');
      setDate(currentDate);
    };
  

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    useEffect(() => {
        const interval = setInterval(() => {
          const date = new Date();
          const formattedTime = moment(date).locale('de').format('HH:mm');
          setCurrentTime(formattedTime);
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);
    
    return(
        <View style={styles.startShiftBox}>
            <Text style={styles.time}>{currentTime}</Text>

           
            <DateTimePicker
                style={{marginTop:30}}
                value={date}
                mode="date"
                display="inline"
                onChange={handleDateChange}
                />

            <Pressable onPress={() => console.log("Clicked")}style={styles.button}>
                <Text style={styles.buttonText}>Start Shift</Text>
            </Pressable>
        </View>
    );
}

export default StartShift;