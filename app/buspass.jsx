import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const BusPass = () => {
  const studentInfo = {
    name: "Gladlin Mascarenhas",
    section: "CSE-A",
    busStop: "Kottara",
    seatNo: "14",
    issueDate: "2024-06-01",
    validTill: "2025-06-01",
    profilePic: 'https://via.placeholder.com/100',
    usn: "4SF22CS123",
    dept: "Computer Science",
    year: "3rd Year",
    address: "123, MG Road, Mangalore",
    contact: "9876543210",
    bloodGroup: "O+"
  };

  return (
    <View style={styles.container}>
      {/* Bus Pass Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🚌 Bus Pass</Text>
        <View style={styles.row}>
          <Image source={{ uri: studentInfo.profilePic }} style={styles.profile} />
          <View style={styles.info}>
            <Text>Name: {studentInfo.name}</Text>
            <Text>Section: {studentInfo.section}</Text>
            <Text>Bus Stop: {studentInfo.busStop}</Text>
            <Text>Seat No: {studentInfo.seatNo}</Text>
            <Text>Date of Issue: {studentInfo.issueDate}</Text>
            <Text>Valid Till: {studentInfo.validTill}</Text>
          </View>
        </View>
        <View style={styles.qrContainer}>
          <QRCode value={studentInfo.usn} size={100} />
        </View>
      </View>

      {/* Passenger Details Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>👤 Passenger Details</Text>
        <View style={styles.row}>
          <Image source={{ uri: studentInfo.profilePic }} style={styles.profile} />
          <View style={styles.info}>
            <Text>USN: {studentInfo.usn}</Text>
            <Text>Department: {studentInfo.dept}</Text>
            <Text>Year: {studentInfo.year}</Text>
            <Text>Address: {studentInfo.address}</Text>
            <Text>Contact No: {studentInfo.contact}</Text>
            <Text>Blood Group: {studentInfo.bloodGroup}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BusPass;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  info: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  qrContainer: {
    alignItems: 'center',
    marginTop: 12,
  }
});
