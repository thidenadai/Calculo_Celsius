import { TextInput } from "react-native";

export default function TxtInputComponent({
  txtplace,
  changeText,
  styleInput,
}) {
  return (
    <TextInput
      style={styleInput}
      placeholder={txtplace}
      onChangeText={changeText}
    />
  );
}
