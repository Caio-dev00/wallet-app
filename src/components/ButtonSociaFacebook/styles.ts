import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from "react-native-responsive-fontsize";
import { Fontisto } from "@expo/vector-icons";

export const Button = styled(RectButton)`
  width: ${RFValue(130)}px;
  height: ${RFValue(60)}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 16px;
  border-radius: ${RFValue(5)}px;
  margin-right: ${RFValue(5)}px;
  margin-left: ${RFValue(5)}px;


  background-color: ${({ theme }) => theme.COLORS.BLUE};
`;


export const Title = styled.Text`
  font-size: ${RFValue(17)}px;
  margin-left: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
  margin-top: 6px;
  margin-right: 5px;
  color: #FFF
`;

export const IconFacebook = styled(Fontisto)`
  font-size: ${RFValue(20)}px;
`

