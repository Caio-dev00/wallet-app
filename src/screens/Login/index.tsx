import React from "react";
import { SafeAreaView, Text } from "react-native";
import {
  Container,
  ContentHeader,
  Title,
  Description,
  ViewButton,
  ContentBody,
  ContentFooter
 } from "./styles";
import { ButtonSocialGoogle } from "../../components/ButtonSocialGoogle/ButtonSocialGoogle";
import { ButtonSocial } from "../../components/ButtonSociaFacebook/ButtonSocial";

const Login: React.FC = () => {
  return (
    <SafeAreaView>
      <Container>
        <ContentHeader>
            <Title>Seja Bem-vindo(a) {"\n"} ao Wallat App</Title>

            <Description>Entrar com rede sociais</Description>

            <ViewButton>
                <ButtonSocialGoogle title="Google" />
                <ButtonSocial title="Facebook" iconName="facebook" iconColor="#FFF" />
            </ViewButton>

        </ContentHeader>

        <ContentBody>

        </ContentBody>

        <ContentFooter>

        </ContentFooter>
      </Container>
    </SafeAreaView>
  )
}

export { Login };

