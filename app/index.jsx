import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
const profileimg = require('../assets/images/profileimg.jpg');

const app = () => {
  const studentName = "Gladlin Mascarenhas"; // You can fetch dynamically later

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.nameText}>Hi, {studentName}</Text>
        <Image
          source={profileimg} // Add your icon here
          style={styles.profileIcon}
        />
      </View>

      {/* Card Section */}
      <View style={styles.cardContainer}>
        <Link href="/livelocation" asChild>
          <Pressable style={styles.card}>
            <Text style={styles.cardText}>Live Location</Text>
          </Pressable>
        </Link>
        <Link href="/announcements" asChild>
          <Pressable style={styles.card}>
            <Text style={styles.cardText}>Announcements</Text>
          </Pressable>
        </Link>
        <Link href="/buspass" asChild>
          <Pressable style={styles.card}>
            <Text style={styles.cardText}>Bus Pass</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#F4F7FB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  nameText: {
    fontSize: 22,
    fontWeight: '600',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  cardContainer: {
    gap: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    // Remove shadow props (React Native)
    // Use this for web:
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },  
  cardText: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
});
