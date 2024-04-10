import { TextInput } from "react-native";

export default function TxtInputComponent({
  txtplace,
  changeText,
  styleInput,
  keybrdType,
  value,
}) {
  return (
    <TextInput
      style={styleInput}
      placeholder={txtplace}
      onChangeText={changeText}
      keyboardType={keybrdType}
    />
  );
}
