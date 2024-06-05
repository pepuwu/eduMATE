import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Button1 = ({
  descargar,
  buttonPosition,
  buttonWidth,
  buttonTop,
  buttonLeft,
  buttonHeight,
  descargarTop,
  descargarLeft,
  descargarFontSize,
  descargarFontWeight,
  descargarFontFamily,
  onButtonPress,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      ...getStyleValue("position", buttonPosition),
      ...getStyleValue("width", buttonWidth),
      ...getStyleValue("top", buttonTop),
      ...getStyleValue("left", buttonLeft),
      ...getStyleValue("height", buttonHeight),
    };
  }, [buttonPosition, buttonWidth, buttonTop, buttonLeft, buttonHeight]);

  const descargarStyle = useMemo(() => {
    return {
      ...getStyleValue("top", descargarTop),
      ...getStyleValue("left", descargarLeft),
      ...getStyleValue("fontSize", descargarFontSize),
      ...getStyleValue("fontWeight", descargarFontWeight),
      ...getStyleValue("fontFamily", descargarFontFamily),
    };
  }, [
    descargarTop,
    descargarLeft,
    descargarFontSize,
    descargarFontWeight,
    descargarFontFamily,
  ]);

  return (
    <View style={[styles.button, buttonStyle]} onPress={onButtonPress}>
      <View style={styles.buttonChild} />
      <Text style={[styles.descargar, descargarStyle]}>{descargar}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xl,
    backgroundColor: Color.colorCornflowerblue,
    position: "absolute",
  },
  descargar: {
    top: "16.84%",
    left: "11.61%",
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.urbanistBold,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  button: {
    width: 155,
    height: 30,
  },
});

export default Button1;
