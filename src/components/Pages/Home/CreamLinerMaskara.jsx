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
export const CreamLinerMaskara = () => {
  return (
    <Box>
      <Heading fontSize="36px" mb={2}>
        SHADOW PLAY
      </Heading>
      <Box mb={5}>
        Play up your smokey eye with shimmering shadow that catches the light.
      </Box>
      <Center>
        <Wrap>
          <WrapItem>
            <Box align="start" mr={2}>
              <img
                width="400px"
                src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_SpringSmokeyEye_pc_1.jpg"
                alt="cream"
              />
              <Heading mb={2} align="start" fontSize="25px">
                SHIMMER ON
              </Heading>
              <Text>
                Swipe on
                <span className="bold">Long-Wear Cream Shadow in cinnamon</span>
                ,
              </Text>
              <Text> Golden Pink And Bark for imension Shimmer</Text>
              <Button
                color="white"
                bg="black"
                size="lg"
                borderRadius="0px"
                mt={2}
              >
                Shop Now
              </Button>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box align="start" mr={2}>
              <img
                width="400px"
                src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_SpringSmokeyEye_pc_2.jpg"
                alt="cream"
              />
              <Heading mb={2} align="start" fontSize="25px">
                LINE IT OUT
              </Heading>
              <Text>
                Line eyes with
                <span className="bold">
                  Long-Wear Gel Eyeliner in Black Ink
                </span>
              </Text>
              <Text> to turn up the smoke.</Text>
              <Button
                color="white"
                bg="black"
                size="lg"
                borderRadius="0px"
                mt={2}
              >
                Shop Now
              </Button>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box align="start" mr={2}>
              <img
                width="400px"
                src=" https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_SpringSmokeyEye_pc_3.jpg  "
                alt="cream"
              />
              <Heading mb={2} align="start" fontSize="25px">
                VOLUMIZE LASHES
              </Heading>
              <Text>
                Coat lashes with{" "}
                <span className="bold">Smokey Eye Mascara</span>
              </Text>
              <Text> for drama and volume.</Text>
              <Button
                color="white"
                bg="black"
                size="lg"
                borderRadius="0px"
                mt={2}
              >
                Shop Now
              </Button>
            </Box>
          </WrapItem>
        </Wrap>
      </Center>
    </Box>
  );
};
