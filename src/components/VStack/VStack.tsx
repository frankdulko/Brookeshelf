import {PropsWithChildren} from 'react';
import {View} from 'react-native';

type VStackProps = PropsWithChildren<{}>;

function VStack({children}: VStackProps): React.JSX.Element {
  return <View>{children}</View>;
}

export default VStack;
