
import React, { useEffect, useState } from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
// import ChartJSImage from 'chartjs-to-image';
import { Bar } from 'react-chartjs-2';


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
    borderBottom: '1 solid #4A5568',
    paddingBottom: 10,
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
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableHeader: {
    backgroundColor: '#EDF2F7',
    color: '#2D3748',
    fontWeight: 'bold',
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 10,
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

const PDFDocument = ({ appointmentData, statsData }) => {
  const [chartUrl, setChartUrl] = useState('');

  const chartData = {
    labels: statsData.map(stat => stat.title),
    datasets: [{
      label: 'Appointments',
      data: statsData.map(stat => stat.value),
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1
    }]
  };


//   useEffect(() => {
//     const generateChart = async () => {
//       const myChart = new ChartJSImage();
//       myChart.setConfig({
//         type: 'bar',
//         data: {
//           labels: statsData.map(stat => stat.title),
//           datasets: [{
//             label: 'Appointments',
//             data: statsData.map(stat => stat.value),
//             backgroundColor: [
//               'rgba(255, 99, 132, 0.8)',
//               'rgba(54, 162, 235, 0.8)',
//               'rgba(255, 206, 86, 0.8)',
//             ],
//             borderColor: [
//               'rgba(255, 99, 132, 1)',
//               'rgba(54, 162, 235, 1)',
//               'rgba(255, 206, 86, 1)',
//             ],
//             borderWidth: 1
//           }]
//         },
//         options: {
//           scales: {
//             y: {
//               beginAtZero: true
//             }
//           }
//         }
//       });

//       myChart.setWidth(500);
//       myChart.setHeight(300);
//       myChart.setBackgroundColor('white');

//       const url = await myChart.getUrl();
//       setChartUrl(url);
//     };

//     generateChart();
//   }, [statsData]);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Appointment Report</Text>
          <Image
            style={styles.logo}
            src="/placeholder.svg?height=50&width=50"
          />
        </View>

        {/* <View style={styles.section}>
          <Text style={styles.subheader}>Statistics</Text>
          {chartUrl && (
            <Image
              style={styles.chart}
              src={chartUrl}
            />
          )}
          {statsData.map((stat, index) => (
            <Text key={index} style={styles.text}>
              {stat.title}: {stat.value}
            </Text>
          ))}
        </View> */}

    <View style={styles.section}>
        <Text style={styles.subheader}>Statistics</Text>
        <Bar data={chartData} />
        {statsData.map((stat, index) => (
          <Text key={index} style={styles.text}>
            {stat.title}: {stat.value}
          </Text>
        ))}
      </View>

        <View style={styles.section}>
          <Text style={styles.subheader}>Appointment Details</Text>
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Patient</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Date</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Status</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Doctor</Text>
              </View>
            </View>
            {appointmentData.map((appointment, index) => (
              <View style={styles.tableRow} key={index}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{appointment.patient}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{appointment.date}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{appointment.status}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{appointment.doctor}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
          fixed
        />

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