import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  padding: ${RFValue(10)}px;
`;

export const ContentHeader = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${RFValue(20)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  margin-top: ${RFValue(40)}px;
  text-align: center;
  font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const Description = styled.Text`
  margin-top: ${RFValue(60)}px;
  margin-bottom: ${RFValue(10)}px;

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;

export const ViewButton = styled.View`
  flex-direction: row;
`;

export const ContentBody = styled.View`

`;

export const ContentFooter = styled.View`

`;
