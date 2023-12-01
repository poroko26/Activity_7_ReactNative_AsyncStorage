
import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Picker,
  TouchableOpacity,
  Modal
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Style/addPageStyle';


const AddPage = () => {
  const navigation = useNavigation();

  const [idCounter, setIdCounter] = useState(1); 
  const [fname, setFName] = useState('');
  const [Lname, setLName] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [Uname, setUName] = useState('');
  const [password, setPassword] = useState('');

  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [isAlertVisible, setIsAlertVisible] = useState(false);


  const navigateToTablePage = () => {
    navigation.navigate('TablePage');
  };

  const showAlert = (title, message) => {
    setAlertTitle(title);
    setAlertMessage(message);
    setIsAlertVisible(true);
  };

  const handleAddStudent = async () => {
    if (!fname || !Lname || selectedValue.length === (0) || !Uname || !password) {
      showAlert('Error', 'Please fill in all fields');
      return;
    }

    try {
      const existingStudents = await AsyncStorage.getItem('students');
      const students = existingStudents ? JSON.parse(existingStudents) : [];

      const newId = idCounter;
      setIdCounter(newId + 1);

      const newStudent = {
        id: newId.toString(),
        FirstName: fname,
        LastName: Lname,
        Course: selectedValue,
        Username: Uname,
        Password: password,
      };

      students.push(newStudent);

      await AsyncStorage.setItem('students', JSON.stringify(students));

      setFName('');
      setLName('');
      setSelectedValue('');
      setUName('');
      setPassword('');

      showAlert('Success', 'Added Successfully');
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setFName}
        value={fname}
        placeholder="Firstname"
        placeholderTextColor="#999"
      />

      <TextInput
        style={styles.input}
        onChangeText={setLName}
        value={Lname}
        placeholder="Lastname"
        placeholderTextColor="#999"
      />

      <Picker
        style={styles.course}
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Select Course" value="" color="#999" />
        <Picker.Item label="BSIT" value="BSIT" />
        <Picker.Item label="BSCS" value="BSCS" />
        <Picker.Item label="BSIS" value="BSIS" />
        <Picker.Item label="BSCE" value="BSCE" />
      </Picker>

      <View style={styles.secondCon}>
        <TextInput
          style={styles.input}
          onChangeText={setUName}
          value={Uname}
          placeholder="Username"
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry={true}
        />
      </View>

      <View style={styles.thirdCon}>
        <TouchableOpacity style={styles.btn} onPress={handleAddStudent}>
          <Text style={styles.btnText}>Add Student</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={navigateToTablePage}>
          <Text style={styles.btnText}>View Student List</Text>
        </TouchableOpacity>
      </View>
      
      {isAlertVisible && (
        <Modal transparent animationType="none" visible={true}>
          <View style={styles.alertContainer}>
            <View style={styles.alertBox}>
              <Text style={styles.alertTitle}>{alertTitle}</Text>
              <Text style={styles.alertMessage}>{alertMessage}</Text>                       
            </View>
            <TouchableOpacity onPress={() => setIsAlertVisible(false)} style={styles.alertButton}>
                  <Text style={styles.alertButtonText}>OK</Text>
                </TouchableOpacity>  
          </View>
        </Modal>
      )}
    </View>
  );
}

export default AddPage





