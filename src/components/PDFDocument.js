import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const PDFDocument = ({ storedData, email, lastName, userMessage }) => {
  return (
    <Document>
      <Page size="A4">
        <View style={styles.container}>
          <Text>{storedData}</Text>
          <Text>{email}</Text>
          <Text>{lastName}</Text>
          <Text>{userMessage}</Text>
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default PDFDocument;
