import React, { useEffect, useState } from 'react';
import { 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import styles from './Style/tablePageStyle';

const TablePage = () => {
  const [data, setData] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const navigation = useNavigation();

  const navigateToAddPage = () => {
    navigation.navigate('AddPage');
  };

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const existingStudent = await AsyncStorage.getItem('students');
        const students = existingStudent ? JSON.parse(existingStudent) : [];
        setData(students);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  const handleRowClick = (student) => {
    setSelectedStudent(student);
  };

  const handleCloseModal = () => {
    setSelectedStudent(null);
  };
  //AsyncStorage.clear();
  return (
    <ScrollView contentContainerStyle={styles.userContainer}>
      <View style={styles.tableContainer}>
        <Text style={styles.tableLabel}>Student Information</Text>
        <ScrollView horizontal={true}>
          <View>
            <View style={styles.tableHeader}>
              <Text style={{ flex: 0.5, minWidth: 30 }}>ID</Text>
              <Text style={{ flex: 1, minWidth: 150 }}>Name</Text>
              <Text style={{ flex: 0.5, minWidth: 70 }}>Course</Text>
              <Text style={{ flex: 1, minWidth: 70 }}>Username</Text>
            </View>
            <ScrollView>
              {data.map((student, index) => (
                <TouchableOpacity
                  key={student.id}
                  style={index % 2 === 0 ? styles.tableDataEven : styles.tableData}
                  onPress={() => handleRowClick(student)}
                >
                  <Text style={{ flex: 0.5, minWidth: 30 }}>{student.id}</Text>
                  <Text style={{ flex: 1, minWidth: 150 }}>{`${student.FirstName} ${student.LastName}`}</Text>
                  <Text style={{ flex: 0.5, minWidth: 70 }}>{student.Course}</Text>
                  <Text style={{ flex: 1, minWidth: 70 }}>{student.Username}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
      <View style={{alignItems: 'center', marginTop: 100}}>
        <TouchableOpacity style={styles.modalButton} onPress={navigateToAddPage}>
          <Text style={styles.modalButtonText}>Back</Text>
        </TouchableOpacity>
      </View>

      <Modal transparent={true} visible={!!selectedStudent} onRequestClose={handleCloseModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={{marginBottom: 30}}>Student Information</Text>
            <Text style={styles.modalText}>Firstname: {selectedStudent?.FirstName}</Text>
            <Text style={styles.modalText}>Lastname: {selectedStudent?.LastName}</Text>
            <Text style={styles.modalText}>Course: {selectedStudent?.Course}</Text>
            <View style={{marginTop: 30}}>
              <Text style={styles.modalText}>Username: {selectedStudent?.Username}</Text>
              <Text style={styles.modalText}>Password: {selectedStudent?.Password}</Text>
            </View>
            <View style={{alignItems: 'center',}}>
              <TouchableOpacity style={styles.modalButton} onPress={handleCloseModal}>
                <Text style={styles.modalButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default TablePage






