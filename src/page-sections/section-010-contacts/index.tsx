import { Button, HStack, Heading, Text, VStack } from "@chakra-ui/react";

import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export const Section010Contacts = () => {
  return (
    <>
      <VStack p="14" bg="var(--background-dark)">
        <Heading>Contato e Redes Sociais</Heading>
        <HStack p="2">
          <FontAwesomeIcon icon={faPhone} size="2x" />
          <Heading> (51) 9815-7507</Heading>
        </HStack>
        <HStack p="2" gap="8">
          <Button
            colorScheme="facebook"
            leftIcon={<FontAwesomeIcon icon={faFacebook} />}
          />
          <Button
            color="white"
            bg="blackAlpha.900"
            leftIcon={<FontAwesomeIcon icon={faXTwitter} />}
          />
          <Button
            colorScheme="pink"
            leftIcon={<FontAwesomeIcon icon={faInstagram} />}
          />

          <Button
            colorScheme="linkedin"
            leftIcon={<FontAwesomeIcon icon={faLinkedinIn} />}
          />
        </HStack>
      </VStack>
    </>
  );
};
