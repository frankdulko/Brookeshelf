import {PropsWithChildren} from 'react';
import {View} from 'react-native';

type HStackProps = PropsWithChildren<{}>;

function HStack({children}: HStackProps): React.JSX.Element {
  return <View style={{flexDirection: 'row'}}>{children}</View>;
}

export default HStack;
