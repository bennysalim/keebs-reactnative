import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './Pages/SplashScreen';
import Intro from './Pages/Intro';
import LoginKeebs from './Pages/LoginKeebs';
import SignUpKeebs from './Pages/SignUpKeebs';
import LupaPasswordKeebs from './Pages/LupaPasswordKeebs';
import DetailProduct from './Pages/Apps/DetailProduct';
import Product from './Pages/Apps/Product';
import Index from './Pages/Apps/index';
import IndexPertama from './indexpertama';
import Credits from './Pages/Apps/Credits';

import {initializeApp, getApps} from 'firebase/app'
import indexpertama from './indexpertama';

    const firebaseConfig = {
  apiKey: "AIzaSyB7vUEBdUwXZneVoS3Trr2MgNoy_68WC4A",
  authDomain: "keebs-1223a.firebaseapp.com",
  databaseURL: "https://keebs-1223a-default-rtdb.firebaseio.com",
  projectId: "keebs-1223a",
  storageBucket: "keebs-1223a.appspot.com",
  messagingSenderId: "700312086057",
  appId: "1:700312086057:web:aca552518b3f508c8cde38",
  measurementId: "G-W9QLL4ZWC5"
};
if(!getApps().length){
    initializeApp(firebaseConfig);
}

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <IndexPertama />
    // <Credits />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// const firebaseConfig = {
//   apiKey: "AIzaSyB7vUEBdUwXZneVoS3Trr2MgNoy_68WC4A",
//   authDomain: "keebs-1223a.firebaseapp.com",
//   projectId: "keebs-1223a",
//   storageBucket: "keebs-1223a.appspot.com",
//   messagingSenderId: "700312086057",
//   appId: "1:700312086057:web:aca552518b3f508c8cde38",
//   measurementId: "G-W9QLL4ZWC5"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);