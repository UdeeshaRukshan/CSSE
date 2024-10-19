
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  table: {
    display: 'table',
    width: 'auto',
    margin: '10px 0',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCol: {
    width: '25%',
    padding: 5,
  },
  tableHeader: {
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
  },
  tableCell: {
    margin: 'auto',
    fontSize: 10,
  },
  statBox: {
    margin: 5,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  logo: {
    width: 50,
    height: 50,
  },
  subheader: {
    fontSize: 18,
    marginBottom: 10,
    color: '#4A5568',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    color: '#4A5568',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#718096',
  },
  footer: {
    paddingBottom:10,
    position: 'absolute',
    bottom: 10,
    left: 30,
    right: 30,
    textAlign: 'center',
    color: '#718096',
    borderTop: '1 solid #E2E8F0',
    paddingTop: 30,
  },
  chart: {
    marginVertical: 10,
    height: 200,
  },
});

// PDFDocument component that generates the PDF report
const PDFDocument = ({ data = [], statsData = [] }) => {

  // Calculate stats based on the users data passed as 'data'
  const totalUsers = data.length;
  const roleCounts = data.reduce(
    (acc, user) => {
      acc[user.role] = (acc[user.role] || 0) + 1;
      return acc;
    },
    { admin: 0, doctor: 0, nurse: 0, receptionist: 0 }
  );
  
  const joinedThisMonth = data.filter(user => {
    const createdDate = new Date(user.createdAt);
    const currentDate = new Date();
    return (
      createdDate.getMonth() === currentDate.getMonth() &&
      createdDate.getFullYear() === currentDate.getFullYear()
    );
  }).length;

  // Render the PDF document
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Employee Report</Text>
        <Image
            style={styles.logo}
            src="/placeholder.svg?height=50&width=50"
          />
        </View>

        {/* Stats Section */}
        <View>
          <Text style={{ marginBottom: 10, fontSize: 18, fontWeight: 'bold' }}>Stats</Text>
          <View style={styles.statBox}>
            <Text>Total Users: {totalUsers}</Text>
          </View>
          <View style={styles.statBox}>
            <Text>Admins: {roleCounts.admin}</Text>
            <Text>Doctors: {roleCounts.doctor}</Text>
          </View>
          <View style={styles.statBox}>
            <Text>Nurses: {roleCounts.nurse}</Text>
            <Text>Receptionists: {roleCounts.receptionist}</Text>
          </View>
          <View style={styles.statBox}>
            <Text>Joined This Month: {joinedThisMonth}</Text>
          </View>
        </View>

        {/* Users Table */}
        <View>
          <Text style={{ marginTop: 20, fontSize: 18, fontWeight: 'bold' }}>Users</Text>
          <View style={styles.table}>
            {/* Table Header */}
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={[styles.tableCol, styles.tableCell]}>Name</Text>
              <Text style={[styles.tableCol, styles.tableCell]}>Email</Text>
              <Text style={[styles.tableCol, styles.tableCell]}>Role</Text>
              <Text style={[styles.tableCol, styles.tableCell]}>Created Date</Text>
            </View>

            {/* Table Rows */}
            {data.map((user) => (
              <View key={user._id} style={styles.tableRow}>
                <Text style={styles.tableCol}>{user.name}</Text>
                <Text style={styles.tableCol}>{user.email}</Text>
                <Text style={styles.tableCol}>{user.role}</Text>
                <Text style={styles.tableCol}>
                  {new Date(user.createdAt).toLocaleDateString()}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.footer} fixed>
          <Text>CarePulse Medical Center</Text>
          <Text>123 Health Street, Medical City, MC 12345</Text>
          <Text>Phone: (555) 123-4567 | Email: info@carepulse.com</Text>
          <Text>This report is confidential and intended for authorized personnel only.</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;
