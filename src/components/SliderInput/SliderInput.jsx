import { useState } from 'react';
import {
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';

function SliderInput() {
  const [value, setValue] = useState(0);
  const handleChange = (value) => setValue(value);

  return (
    <Flex>
      <NumberInput maxW="100px" mr="2rem" value={value} onChange={handleChange}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Slider
        flex="1"
        focusThumbOnChange={false}
        value={value}
        onChange={handleChange}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb fontSize="sm" boxSize="32px" children={value} />
      </Slider>
    </Flex>
  );
}
export default SliderInput;
