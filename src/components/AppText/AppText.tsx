import {StyleSheet, Text, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export enum AppTextType {
  Body,
  H1,
  H2,
  H3,
  H4,
}

export enum AppTextWeight {
  regular,
  bold,
}

type AppTextProps = {
  text: string;
  type: AppTextType;
  weight: AppTextWeight;
  color?: string;
};

function AppText({
  text,
  type,
  weight,
  color = Colors.black,
}: AppTextProps): React.JSX.Element {
  const textWeight = () => {
    switch (weight) {
      case AppTextWeight.regular:
        return styles.regular;
      case AppTextWeight.bold:
        return styles.bold;
    }
  };

  const textSize = () => {
    switch (type) {
      case AppTextType.Body:
        return styles.body;
      case AppTextType.H4:
        return styles.h4;
      case AppTextType.H3:
        return styles.h3;
      case AppTextType.H2:
        return styles.h2;
      case AppTextType.H1:
        return styles.h1;
    }
  };

  const style = [textWeight(), textSize(), styles.font, {color: color}];

  return <Text style={style}>{text}</Text>;
}

export default AppText;

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  regular: {
    fontWeight: 'normal',
  },
  body: {
    fontSize: 16,
  },
  h1: {
    fontSize: 24,
  },
  h2: {
    fontSize: 22,
  },
  h3: {
    fontSize: 20,
  },
  h4: {
    fontSize: 28,
  },
  font: {
    fontFamily: 'Linux Libertine',
  },
});
