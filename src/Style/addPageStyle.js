import { StyleSheet } from 'react-native';

const addPageStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 250,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#6c757d',
    borderRadius: 5,
  },
  course: {
    height: 40,
    margin: 12,
    width: 250,
  },
  secondCon: {
    marginTop: 40,
  },
  thirdCon: {
    marginTop: 40,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  btn: {
    width: 150,
    marginBottom: 20,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',

  },
  alertContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertBox: {
    backgroundColor: '#fff',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 5,
    width: 200
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  alertMessage: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  alertButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopWidth: 1,
    borderTopColor: '#6c757d',
    width: 200
  },
  alertButtonText: {
    color: '#007bff',
    textAlign: 'center',
  },
});

export default addPageStyle