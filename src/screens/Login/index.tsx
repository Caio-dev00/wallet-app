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

import { Input } from "../../components/Input/Input";

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
            <Input
              name="email"
            />
        </ContentBody>

        <ContentFooter>

        </ContentFooter>
      </Container>
    </SafeAreaView>
  )
}

export { Login };

