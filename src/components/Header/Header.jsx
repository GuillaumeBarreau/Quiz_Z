import { Box, Progress, Text } from '@chakra-ui/react';

function Header(props) {
  return (
    <Box
      position={'absolute'}
      top={'0'}
      left={'0'}
      width={'100%'}
      alignItems={'center'}
      justifyContent={'center'}
      padding={4}
      display={'flex'}
    >
      <Text>{props.course}</Text>
      <Progress
        borderRadius={'md'}
        width={'500px'}
        margin={4}
        size="sm"
        bg="gray.600"
        max={props.maxQuestions}
        value={props.currentQuestion}
      />
      <Text>{`${props.currentQuestion} / ${props.maxQuestions}`}</Text>
    </Box>
  );
}

export default Header;
