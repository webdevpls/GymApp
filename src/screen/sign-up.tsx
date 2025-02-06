import {
  VStack,
  Image,
  Center,
  Text,
  Heading,
  ScrollView,
} from "@gluestack-ui/themed";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import BackgoundImage from "@assets/background.png";
import Logo from "@assets/logo.svg";

import { Input } from "@components/input";
import { Button } from "@components/button";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useNavigation } from "@react-navigation/native";

export function Signup() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const handleBackSignin = () => {
    navigation.navigate("Signin");
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <VStack flex={1}>
        <Image
          source={BackgoundImage}
          alt="BgImage"
          w="$full"
          h={624}
          defaultSource={BackgoundImage}
          position="absolute"
        />

        <VStack flex={1} px="$10" pb="$16" justifyContent="center">
          <Center my="$24">
            <Logo size="4xl" />
            <Text color="white" fontWeight="semibold">
              Treine sua mente e o seu corpo
            </Text>
          </Center>

          <Center gap="$2" flex={1} mb={150}>
            <Heading color="$gray100">Crie sua conta</Heading>
            <Input placeholder="Nome" />
            <Input
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Senha" secureTextEntry />
            <Button title="Criar e acessar" />
          </Center>

          <Button
            title="Voltar para o login"
            variant="outline"
            onPress={handleBackSignin}
          />
        </VStack>
      </VStack>
    </TouchableWithoutFeedback>
  );
}
