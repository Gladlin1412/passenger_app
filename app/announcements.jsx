import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'

const announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    // Simulate API call to fetch announcements
    setAnnouncements([
      { id: '1', title: 'Bus service delayed due to rain', message: 'Please expect a 15-minute delay in bus arrivals.' },
      { id: '2', title: 'New routes available', message: 'Check out the newly added routes for better coverage.' },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Announcements</Text>
      <FlatList
        data={announcements}
        renderItem={({ item }) => (
          <View style={styles.announcementItem}>
            <Text style={styles.announcementTitle}>{item.title}</Text>
            <Text style={styles.announcementMessage}>{item.message}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default announcements;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  announcementItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 3,
  },
  announcementTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  announcementMessage: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  }
});
