import { Flex, Spinner, Progress } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Flex alignItems="top" justifyContent="top">
      <Progress
        size="lg"
        isIndeterminate
        colorScheme="linkedin"
        isAnimated="true"
      />
    </Flex>
  );
};

export default Loader;
