import { Text, View } from "react-native";

import { styles } from "./WorkScreenStyleSheet";

const WorkScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.test}>Work Screen</Text>
        </View>
      
    );
};

export default WorkScreen;