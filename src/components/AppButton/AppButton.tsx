import {StyleSheet, TouchableOpacity} from 'react-native';
import AppText, {AppTextType, AppTextWeight} from '../AppText/AppText';
import {AppColors} from '../../constants/colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export enum ButtonSize {
  Small,
  Medium,
  Large,
}

export enum ButtonType {
  Plain,
  Gray,
  Tinted,
  Filled,
}

type AppButtonProps = {
  text: string;
  size: ButtonSize;
  type: ButtonType;
};

function AppButton({text, size, type}: AppButtonProps): React.JSX.Element {
  const buttonText = () => {
    const textColor =
      type === ButtonType.Plain ? AppColors.darkGray : AppColors.white;
    switch (size) {
      case ButtonSize.Small:
        return (
          <AppText
            text={text}
            type={AppTextType.Body}
            weight={AppTextWeight.regular}
            color={textColor}
          />
        );
      case ButtonSize.Medium:
        return (
          <AppText
            text={text}
            type={AppTextType.H3}
            weight={AppTextWeight.regular}
            color={textColor}
          />
        );
      case ButtonSize.Large:
        return (
          <AppText
            text={text}
            type={AppTextType.H1}
            weight={AppTextWeight.regular}
            color={textColor}
          />
        );
    }
  };

  const buttonStyle = () => {
    switch (type) {
      case ButtonType.Filled:
        return styles.filled;
      case ButtonType.Tinted:
        return styles.tined;
      case ButtonType.Gray:
        return styles.gray;
      case ButtonType.Plain:
        return styles.plain;
    }
  };

  const style = [buttonStyle(), styles.button];

  return <TouchableOpacity style={style}>{buttonText()}</TouchableOpacity>;
}

export default AppButton;

const styles = StyleSheet.create({
  filled: {
    backgroundColor: AppColors.green,
  },
  tined: {
    backgroundColor: AppColors.lightGreen,
  },
  gray: {
    backgroundColor: AppColors.gray,
  },
  plain: {},
  button: {
    borderRadius: 50,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
});
