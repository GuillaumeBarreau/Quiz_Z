import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  ModalHeader,
  useDisclosure,
} from '@chakra-ui/react';
import SliderInput from '../SliderInput/SliderInput';

function ModalSetting() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme="linkedin" onClick={onOpen}>
        Setting
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Setting</ModalHeader>
          <ModalBody>
            <SliderInput></SliderInput>
          </ModalBody>
          <ModalCloseButton />
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalSetting;
