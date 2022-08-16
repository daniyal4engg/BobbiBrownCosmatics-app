import "../../styles/CreamLinerMaskara.css";
import { Wrap, WrapItem, Center, Box, Text, Heading } from "@chakra-ui/react";

export const CleanLookposter = () => {
  return (
    <Box className="familyfontdiff" mt={8}>
      <Center>
        <Wrap>
          <WrapItem>
            <Box w="500px">
              <img
                src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_Minimalist_Clean_Look_pc.jpg"
                alt=""
              />
            </Box>
            <Box w="50%" className="flexCenter">
              <Text className="flexCenterChild">
                LIVE FROM L.A., IT’S NIKKI
              </Text>
              <Heading className="flexCenterChild"> MINIMALIST</Heading>
              <Heading> CLEAN LOOK</Heading>
              <Text>
                Watch how Artist in Residence Nikki DeRoest creates a Minimalist
                Clean Look
              </Text>
              <Text>using effortless, glow-boosting essentials.</Text>
            </Box>
          </WrapItem>
        </Wrap>
      </Center>
    </Box>
  );
};
