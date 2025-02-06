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

export function Signin() {
  const navigator = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount() {
    navigator.navigate("Signup");
  }
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

        <VStack flex={1} px="$10" pb="$16" justifyContent="center" mt={40}>
          <Center my="$24">
            <Logo size="4xl" />
            <Text color="white" fontWeight="semibold">
              Sign in to your account
            </Text>
          </Center>

          <Center gap="$2">
            <Heading color="$gray100">Acesse a sua conta</Heading>
            <Input
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Senha" secureTextEntry />
            <Button title="Acessar" />
          </Center>

          <Center flex={1} justifyContent="flex-end" mt="$4">
            <Text color="$gray100" fontSize="$sm" mb="$5" fontFamily="%body">
              {" "}
              Ainda não tem acesso?
            </Text>

            <Button
              title="Criar conta"
              variant="outline"
              onPress={handleNewAccount}
            />
          </Center>
        </VStack>
      </VStack>
    </TouchableWithoutFeedback>
  );
}
