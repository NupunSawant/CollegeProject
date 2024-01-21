import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" justifyContent="center" py="5">
      <Text>
        CopyRight {new Date().getFullYear()}. My Store. All Rights Reserved.
      </Text>
    </Flex>
  );
};

export default Footer;
