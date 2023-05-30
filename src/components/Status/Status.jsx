import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';

function Status(props) {
  if (props.correct) {
    return (
      <Alert status="info" variant="solid" width={'100%'}>
        <AlertIcon />
        <AlertTitle>Correct!</AlertTitle>
      </Alert>
    );
  }
  return (
    <Alert status="error" variant="solid" width={'100%'}>
      <AlertIcon />
      <AlertTitle>Wrong !</AlertTitle>
    </Alert>
  );
}
export default Status;
