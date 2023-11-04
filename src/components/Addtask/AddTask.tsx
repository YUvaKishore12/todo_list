import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface CustomModalProps {
  showModal: boolean;
  onClose: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({showModal, onClose}) => {
  return (
    <Modal visible={showModal} transparent animationType="slide">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'} // Adjust behavior for iOS and Android
        style={styles.modalContainer}>
        <TouchableOpacity onPress={onClose}>
          <Text>Close</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.taskNameStyle}
          placeholderTextColor={'black'}
          placeholder="TaskName"
        />
        <View style={styles.categoryView}>
          <TextInput
            placeholder="Category"
            placeholderTextColor={'black'}
            style={styles.categoryTextInput}
          />
          <TouchableOpacity style={styles.iconButton}>
            <Icon style={{}} name="navigation" size={30} color={colors.black} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default CustomModal;
const styles = StyleSheet.create({
  modalContainer: {
    width: '85%',
    backgroundColor: colors.white,
    height: 230,
    borderRadius: 30,
    alignSelf: 'center', // Center horizontally
    marginTop: 'auto', // Center vertically
    marginBottom: 100, //
  },
  taskNameStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    height: 60,
    backgroundColor: 'rgba(193, 220, 183, 0.72)',
    marginTop: 10,
    borderRadius: 10,
    marginLeft: 20,
  },
  categoryView: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
  },
  categoryTextInput: {
    width: '60%',
    height: 60,
    backgroundColor: 'rgba(193, 220, 183, 0.72)',
    marginTop: 20,
    borderRadius: 10,
    marginLeft: 20,
  },
  iconButton: {
    width: 50, // Adjust the size as needed
    height: 50, // Same value as width to create a circle
    borderRadius: 30, // Half of the width/height
    backgroundColor: 'rgba(193, 220, 183, 0.72)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});
