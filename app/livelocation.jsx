import { View, Text, Platform, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { WebView } from 'react-native-webview';  // Webview for Google Maps

const LiveLocation = () => {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBuses([
        { id: '1', busNumber: 'B1', location: 'Near SJEC', eta: '5 minutes', latitude: 12.9141, longitude: 74.8574 },
        { id: '2', busNumber: 'B2', location: 'Near Mall', eta: '10 minutes', latitude: 12.9225, longitude: 74.8594 },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live Location</Text>
      {Platform.OS === 'web' ? (
        <WebView
          source={{ uri: 'https://maps.google.com' }}  // Use Google Maps URL for web
          style={styles.map}
        />
      ) : (
        <MapView style={styles.map}>
          {buses.map((bus) => (
            <Marker
              key={bus.id}
              coordinate={{ latitude: bus.latitude, longitude: bus.longitude }}
              title={`Bus ${bus.busNumber}`}
              description={`Location: ${bus.location}, ETA: ${bus.eta}`}
            />
          ))}
        </MapView>
      )}
      <FlatList
        data={buses}
        renderItem={({ item }) => (
          <View style={styles.busItem}>
            <Text style={styles.busText}>Bus: {item.busNumber}</Text>
            <Text style={styles.busText}>Location: {item.location}</Text>
            <Text style={styles.busText}>ETA: {item.eta}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  busItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 3,
  },
  busText: {
    fontSize: 16,
    color: '#333',
  },
  map: {
    flex: 1,
    marginBottom: 20,
  },
});

export default LiveLocation;
