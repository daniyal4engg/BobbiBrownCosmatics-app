import "../../styles/CreamLinerMaskara.css";
import {
  Wrap,
  WrapItem,
  Center,
  Box,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

// Shadow play section cream,liner ,maskara
export const FounderCreators = () => {
  return (
    <Box mt={10}>
      <Heading fontSize="36px" mb={2}>
        PRETTY POWERFUL AND PROUD
      </Heading>
      <Box mb={5}>
        This Pride Month, we’re spotlighting friends in the LGBTQIA+ community
        who embody what it means to be Pretty Powerful and proud.
      </Box>
      <Center>
        <Button mb={5} bg="black" colorScheme="white">
          Discover Our Pretty Powerful Fund
        </Button>
      </Center>
      <Center>
        <Wrap>
          <WrapItem>
            <Box align="start" mr={2} w="280px">
              <img
                width="280px"
                src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_PrettyPowerful_PRIDE_1.jpg"
                alt="cream"
              />
              <Box className="bold" mb={2} align="start">
                MARC REAGAN
              </Box>
              <Text className="bold">
                Executive Director of Bobbi Brown Global Artistry & Consumer
                Experience
              </Text>
              <Text>
                “The beauty of being proud is loving yourself from the inside
                out.”
              </Text>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box align="start" mr={2} w="280px">
              <img
                width="280px"
                src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_PrettyPowerful_PRIDE_2.jpg"
                alt="cream"
              />
              <Box className="bold" mb={2} align="start">
                CHAR ELLESSE
              </Box>
              <Text>
                <span className="bold"> Beauty Content Creator</span>
              </Text>
              <Text>
                “The beauty of being proud is knowing I have a community of
                people who uplift, support, and embrace me with open arms.”
              </Text>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box align="start" mr={2} w="280px">
              <img
                width="280px"
                src=" https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_PrettyPowerful_PRIDE_3.jpg"
                alt="cream"
              />
              <Box className="bold" mb={2} align="start">
                CHAR ELLESSE
              </Box>
              <Text className="bold">
                Founder and Director of Girls Will Be Boys
              </Text>
              <Text> “The beauty of being proud is community.”</Text>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box align="start" mr={2} w="280px">
              <img
                width="280px"
                src=" https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_PrettyPowerful_PRIDE_4.jpg"
                alt="cream"
              />
              <Box className="bold" mb={2} align="start">
                DAVID LOPEZ
              </Box>
              <Text className="bold">Beauty Content Creator</Text>
              <Text>
                “The beauty of being proud is that you give others the autonomy
                to be proud of who they are.”
              </Text>
            </Box>
          </WrapItem>
        </Wrap>
      </Center>
    </Box>
  );
};
