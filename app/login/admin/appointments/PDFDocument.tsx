import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

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
    flexDirection:  'row',
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
    position: 'absolute',
    bottom: 10,
    left: 30,
    right: 30,
    textAlign: 'center',
    color: '#718096',
    borderTop: '1 solid #E2E8F0',
    paddingTop: 10,
  },
});

interface Appointment {
  _id: string;
  patientId: string;
  doctor: string;
  schedule: string;
  reason: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

interface Stats {
  totalAppointments: number;
  appointmentsThisMonth: number;
  mostAppointedDoctor: string;
}

interface PDFDocumentProps {
  data: Appointment[];
  stats: Stats;
}

const PDFDocument: React.FC<PDFDocumentProps> = ({ data, stats }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Appointment Report</Text>
          <Image
            style={styles.logo}
            src="/assets/images/image.png"
          />
        </View>

        <View>
          <Text style={styles.subheader}>Statistics</Text>
          <View style={styles.statBox}>
            <Text>Total Appointments: {stats.totalAppointments}</Text>
          </View>
          <View style={styles.statBox}>
            <Text>Appointments This Month: {stats.appointmentsThisMonth}</Text>
          </View>
          <View style={styles.statBox}>
            <Text>Most Seen Doctor: {stats.mostAppointedDoctor}</Text>
          </View>
        </View>

        <View>
          <Text style={styles.subheader}>Appointments</Text>
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={[styles.tableCol, styles.tableCell]}>Patient ID</Text>
              <Text style={[styles.tableCol, styles.tableCell]}>Doctor</Text>
              <Text style={[styles.tableCol, styles.tableCell]}>Date & Time</Text>
              <Text style={[styles.tableCol, styles.tableCell]}>Status</Text>
            </View>

            {data.map((appointment) => (
              <View key={appointment._id} style={styles.tableRow}>
                <Text style={[styles.tableCol, styles.tableCell]}>{appointment.patientId}</Text>
                <Text style={[styles.tableCol, styles.tableCell]}>{appointment.doctor}</Text>
                <Text style={[styles.tableCol, styles.tableCell]}>
                  {new Date(appointment.schedule).toLocaleString()}
                </Text>
                <Text style={[styles.tableCol, styles.tableCell]}>{appointment.status}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.footer} fixed>
          <Text>HealthMate Medical Center</Text>
          <Text>123 Health Street, Medical City, MC 12345</Text>
          <Text>Phone: (555) 123-4567 | Email: info@healthmate.com</Text>
          <Text>This report is confidential and intended for authorized personnel only.</Text>
        </View>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
          fixed
        />
      </Page>
    </Document>
  );
};

export default PDFDocument;