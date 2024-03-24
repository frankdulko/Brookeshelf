import {ScrollView, View} from 'react-native';
import VStack from '../components/VStack/VStack';

type BookDetailsProps = {
  title: string;
  author: string;
  rating: number;
  year: number;
  haveRead: boolean;
  description: string;
  reviews: any[];
};

function BookDetails({
  title,
  author,
  rating,
  year,
  haveRead,
  description,
  reviews,
}: BookDetailsProps): React.JSX.Element {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <VStack></VStack>
    </ScrollView>
  );
}

export default BookDetails;
