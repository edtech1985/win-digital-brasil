import { HStack, Heading, IconButton, VStack } from "@chakra-ui/react";
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
      <VStack p={{ base: "4", sm: "14" }} bg="var(--background-dark)">
        <Heading>Contato e Redes Sociais</Heading>
        <HStack p="2">
          <FontAwesomeIcon icon={faPhone} size="2x" />
          <Heading> (51) 9815-7507</Heading>
        </HStack>
        <HStack p="2" gap="8">
          <IconButton
            bg="blue"
            aria-label="Facebook"
            icon={<FontAwesomeIcon icon={faFacebook} />}
          />
          <IconButton
            color="white"
            aria-label="Twitter"
            bg="blackAlpha.900"
            icon={<FontAwesomeIcon icon={faXTwitter} />}
          />
          <IconButton
            bg="pink.500"
            aria-label="Instagram"
            icon={<FontAwesomeIcon icon={faInstagram} />}
          />

          <IconButton
            bg="blue.700"
            aria-label="Linkedin"
            icon={<FontAwesomeIcon icon={faLinkedinIn} />}
          />
        </HStack>
      </VStack>
    </>
  );
};
