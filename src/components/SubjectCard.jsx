import { Card, CardHeader, Heading, Icon } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function SubjectCard(props) {
  const navigate = useNavigate();
  return (
    <Card
      display="flex"
      alignItems="center"
      cursor={'pointer'}
      onClick={() => navigate(`${props.navigate}`)}
    >
      <CardHeader>
        <Heading as="h1" size="lg">
          {' '}
          {props.subject}
        </Heading>
      </CardHeader>
      <img src={props.imgSrc} alt={props.imgAlt} width="180" height="180" />
      <Icon viewBox="0 0 200 200" color="red.500">
        {props.imgSrc}
      </Icon>
    </Card>
  );
}
export default SubjectCard;
