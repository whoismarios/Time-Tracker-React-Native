import { Text, View, ImageBackground } from "react-native";
import { styles } from "./WorkScreenStyleSheet";
import StartShift from './../../components/StartShift/StartShift';

const WorkScreen = () => {
    return (
        <ImageBackground
            style={styles.backgroundImage}
            source={require('../../../assets/time_without_text_opacity0.1.png')}
            >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <StartShift />
            </View>
        </ImageBackground>
      
    );
};

export default WorkScreen;