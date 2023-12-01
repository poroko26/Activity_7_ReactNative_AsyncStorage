import { StyleSheet } from 'react-native';

const tablePageStyle = StyleSheet.create({
  userContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  tableContainer: {
    alignItems: 'center',
    width: '80%',
    height: 500
  },
  tableLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#4cc9f0',
    borderBottomWidth: 1,
    padding: 10,
  },
  tableData: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#ecf0f1',
  },
  tableDataEven: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#ade8f4',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: 300
  },
  modalText: {
    marginBottom: 10,
  },
  modalButton: {
    width: 150,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  modalButtonText: {
    color: '#fff',   
    textAlign: 'center', 
    fontFamily: 'Roboto-Italic'
  },
});

export default tablePageStyle;