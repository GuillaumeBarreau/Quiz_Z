import { Checkbox, Stack, Box } from '@chakra-ui/react';

function CheckboxAnswer(props) {
  const { answer, handleClickSelectAnswers, style, disabled } = props;

  return (
    <Box
      background={'#5b5b5b47'}
      minWidth={'500px'}
      borderRadius={'md'}
      style={style}
      padding={4}
    >
      <Checkbox
        size="lg"
        width={'100%'}
        onChange={() => handleClickSelectAnswers(answer)}
        disabled={disabled}
      >
        {answer}
      </Checkbox>
    </Box>
  );
}

const Answer = (props) => {
  const {
    optionAnswers,
    statusShown,
    correctAnswer,
    selectAnswers,
    indexAnswer,
  } = props;

  return (
    <Stack>
      {optionAnswers.map((answer, index) => {
        let style = {
          border: '4px solid transparent',
        };

        if (statusShown) {
          let isAnswerCorrect = correctAnswer.includes(answer);
          let isAnswerSelected = selectAnswers.includes(answer);

          if (isAnswerSelected && isAnswerCorrect) {
            style = { border: '4px solid #3182ce' };
          } else if (isAnswerSelected) {
            style = { border: '4px solid #E53E3E' };
          } else if (isAnswerCorrect) {
            style = { border: '4px solid #e5923e' };
          } else {
            style = {
              border: '4px solid transparent',
            };
          }
        }
        return (
          <CheckboxAnswer
            key={`${index}_${indexAnswer}`}
            answer={answer}
            style={style}
            disabled={statusShown}
            {...props}
          />
        );
      })}
    </Stack>
  );
};

export default Answer;
