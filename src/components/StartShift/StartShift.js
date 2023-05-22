import {View, Text, Pressable} from 'react-native';
import { useState, useEffect } from 'react';
import {styles} from './StartShiftStyleSheet';
import moment from 'moment';
import 'moment/locale/de';
import DateTimePicker from '@react-native-community/datetimepicker';



const StartShift = () => {

    const [currentTime, setCurrentTime] = useState('');

    const [date, setDate] = useState(new Date());

    const [shiftStarted, changeShiftStatus] = useState(false);

    const onShiftStarted = () => {
      changeShiftStatus(true);
      console.log("Shift Started");
    }

    const onShiftEnd = () => {

      //API CALL PUT
      //UPDATE Shifts SET endDate=':endDate' WHERE id=':id' 


      changeShiftStatus(false);
      console.log("Shift completed");
    }

    useEffect(() => {
      const isShiftActive = () => {
        

        const personId = 123;

        fetch(`http://localhost:8080/shifts/${personId}/active`)
          .then(response => response.json())
          .then(data => {
            if(data === 0){
              changeShiftStatus(false);
              console.log("No shift open");
              console.log(data)
            }else {
              changeShiftStatus(true)
              console.log("Shift available")
              console.log(data)
            }
          })
          .catch(error => {
            console.error("Error", error)
          })
      }
      isShiftActive();
    },[]);
   
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

            <Pressable disabled={shiftStarted} onPress={onShiftStarted}style={styles.button}>
                <Text style={styles.buttonText}>Start Shift</Text>
            </Pressable>

            <Pressable disabled={!shiftStarted} onPress={onShiftEnd}style={styles.endShiftButton}>
                <Text style={styles.endShift}>End Shift</Text>
            </Pressable>
        </View>
    );
}

export default StartShift;