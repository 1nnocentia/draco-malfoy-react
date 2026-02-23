import { StyleSheet, Text, View , FlatList, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { IMAGE_GRID, PROFILEIMG } from '../constant/constant'
import { useFonts, AlmendraDisplay_400Regular } from '@expo-google-fonts/almendra-display'

const index = () => {
  let [fontsLoaded] = useFonts({
    AlmendraDisplay_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider >
      <SafeAreaView style={styles.container}>
        <View style={styles.headerSection}>
          <Image source={PROFILEIMG} style={styles.profilePicture} />
          <Text style={styles.titleText}>Draco Malfoy</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => alert('1')}>
          <Text style={styles.buttonText}>Press Me</Text>
          </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.rightButton]} onPress={() => alert('2')}>
            <Text style={styles.buttonText}>Press Me</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <FlatList
            data={IMAGE_GRID}
            numColumns={3}
            scrollEnabled={false}
            renderItem={({item}) => (
              <Image source={item.src} style={[styles.gridImage]}/> 
            )}
            keyExtractor={item => item.id.toString()}
            />
        </View>
        <View style={[styles.buttonContainer, styles.bottomButton]}>
          <TouchableOpacity style={[styles.button]} onPress={() => alert('3')}>
          <Text style={styles.buttonText}>Press Me</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    flexDirection: 'column',
    backgroundColor: '#1F3F30',
  },
  headerSection: {
    marginTop: 25,
    alignItems: 'center',
    gap: 15,
  },
  profilePicture: {
    alignContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  titleText:{
    color: 'white',
    fontFamily: 'AlmendraDisplay_400Regular',
    fontSize: 25,
  },
  imageContainer: {
    padding : 10,
  },
  gridImage: {
    flex: 1,
    aspectRatio: 1,
    marginVertical: 8,
    marginHorizontal: 5,
    borderRadius: 8,
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    backgroundColor: '#388364',
    padding: 15,
  },
  rightButton: {
    backgroundColor: '#68C8A2',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  bottomButton: {
    position: 'absolute',
    bottom: 30,
    flex: 1,
  }
})