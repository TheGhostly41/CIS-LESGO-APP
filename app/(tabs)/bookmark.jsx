import { Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";

const initialRegion = {
  latitude: 17.01195556281685,
  latitudeDelta: 2.6823605934720174,
  longitude: -88.5961727052927,
  longitudeDelta: 1.4860095083713531,
};

const locationOfTerminal = [
  {
    title: "Orange Walk Terminal",
    location: {
      latitude: 18.080263290152505,
      longitude: -88.56442058554245,
    },
    description: "This is the Orange Walk Terminal",
  },
  {
    title: "Belmopan Terminal",
    location: {
      latitude: 17.249518853175893,
      longitude: -88.77489351056114,
    },
    description: "This is the Belmopan Terminal",
  },
  {
    title: "Belize City Terminal",
    location: {
      latitude: 17.494302275057848,
      longitude: -88.19322077350779,
    },
    description: "This is the Belize City Terminal",
  },
];

const Bookmark = () => {
  return (
    <SafeAreaView className="px-4 my-6 bg-primary h-full">
      <Text className="text-2xl text-white font-psemibold">Maps</Text>
      <Text className="font-pmedium text-sm text-gray-100 pb-5">
        Find the nearest Bus Terminal!
      </Text>

      <MapView
        initialRegion={initialRegion}
        showsUserLocation={true}
        showsMyLocationButton={true}
        style={styles.map}
      >
        {locationOfTerminal.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.location}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "90%",
  },
});

export default Bookmark;
