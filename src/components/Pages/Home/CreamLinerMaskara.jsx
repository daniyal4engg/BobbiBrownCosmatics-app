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
      <Heading fontSize="36px">SHADOW PLAY</Heading>
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

export const SummerLineUp = () => {
  return (
    <Box>
      <Heading fontSize="36px" mt={4}>
        MADE TO LAST
      </Heading>
      <Box mb={5}>
        Meet our summer lineup of lightweight, long-wearing formulas for a
        polished look that lasts.
      </Box>
      <Center>
        <Wrap>
          <WrapItem>
            <Box mr={2}>
              <Center>
                <img
                  width="80%"
                  height="600px"
                  src="https://m.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_SummerSolstice_pc.jpg"
                  alt="cream"
                />
              </Center>
            </Box>
          </WrapItem>
        </Wrap>
      </Center>
    </Box>
  );
};

export const LearnFromPros = () => {
  return (
    <Box>
      <Box mt={5}>VIRTUAL ARTISTY CONSULTATIONS</Box>
      <Heading fontSize="36px">LEARN FROM THE PROS</Heading>
      <Box mb={5}>
        From trying a new shade to learning new tips, our artists are here to
        help with complimentary video sessions.
      </Box>
      <Center>
        <Wrap>
          <WrapItem>
            <Box align="start" mr={2}>
              <img
                width="400px"
                src="https://m.bobbibrowncosmetics.com/media/export/cms/VirtualServices/SS21_lookfreshvideocalls.jpg"
                alt="cream"
              />
              <Box>35min</Box>
              <Heading mb={2} align="start" fontSize="25px">
                Look Fresh for Video Calls
              </Heading>
              <Text>Learn how to look bright eyed and fresh faced</Text>
              <Text>in minutes with our pro tips.</Text>
              <Button
                color="white"
                bg="black"
                size="lg"
                borderRadius="0px"
                mt={2}
              >
                Book Now
              </Button>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box align="start" mr={2}>
              <img
                width="400px"
                src="https://m.bobbibrowncosmetics.com/media/export/cms/VirtualServices/BB_PC_VirtualServices_LandingPage_Group_Tile2_1_@2x.gif"
                alt="cream"
              />
              <Box>15min</Box>
              <Heading mb={2} align="start" fontSize="25px">
                Correct & Conceal
              </Heading>

              <Text>look instantly more awake and bright-eyed</Text>
              <Text>
                using our new Skin Corrector Stick & Skin Concealer Stick.
              </Text>
              <Button
                color="white"
                bg="black"
                size="lg"
                borderRadius="0px"
                mt={2}
              >
                Book Now
              </Button>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box align="start" mr={2}>
              <img
                width="400px"
                src=" https://m.bobbibrowncosmetics.com/media/export/cms/VirtualServices/SS21_customizeskincareroutine.jpg "
                alt="cream"
              />
              <Box>15min</Box>
              <Heading mb={2} align="start" fontSize="25px">
                Customize Your Skincare Routine
              </Heading>
              <Text>Learn how to address your top skin concerns with</Text>
              <Text> a personalized routine curated by an artist.</Text>
              <Button
                color="white"
                bg="black"
                size="lg"
                borderRadius="0px"
                mt={2}
              >
                Book Now
              </Button>
            </Box>
          </WrapItem>
        </Wrap>
      </Center>
    </Box>
  );
};

// Shadow play section cream,liner ,maskara
// export const LearnFromPros = () => {
//   return (
//     <Box mt={10}>
//       <Heading fontSize="36px" mb={2}>
//         LEARN FROM THE PROS
//       </Heading>
//       <Box mb={5}>Looking fresh-faced? Let's see it. Mention</Box>

//       <Center>
//         <Wrap>
//           <WrapItem>
//             <Box align="start" mr={2} w="280px">
//               <img
//                 width="280px"
//                 src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_PrettyPowerful_PRIDE_1.jpg"
//                 alt="cream"
//               />
//               <Box className="bold" mb={2} align="start">
//                 MARC REAGAN
//               </Box>
//               <Text className="bold">
//                 Executive Director of Bobbi Brown Global Artistry & Consumer
//                 Experience
//               </Text>
//               <Text>
//                 “The beauty of being proud is loving yourself from the inside
//                 out.”
//               </Text>
//             </Box>
//           </WrapItem>
//           <WrapItem>
//             <Box align="start" mr={2} w="280px">
//               <img
//                 width="280px"
//                 src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_PrettyPowerful_PRIDE_2.jpg"
//                 alt="cream"
//               />
//               <Box className="bold" mb={2} align="start">
//                 CHAR ELLESSE
//               </Box>
//               <Text>
//                 <span className="bold"> Beauty Content Creator</span>
//               </Text>
//               <Text>
//                 “The beauty of being proud is knowing I have a community of
//                 people who uplift, support, and embrace me with open arms.”
//               </Text>
//             </Box>
//           </WrapItem>
//           <WrapItem>
//             <Box align="start" mr={2} w="280px">
//               <img
//                 width="280px"
//                 src=" https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_PrettyPowerful_PRIDE_3.jpg"
//                 alt="cream"
//               />
//               <Box className="bold" mb={2} align="start">
//                 CHAR ELLESSE
//               </Box>
//               <Text className="bold">
//                 Founder and Director of Girls Will Be Boys
//               </Text>
//               <Text> “The beauty of being proud is community.”</Text>
//             </Box>
//           </WrapItem>
//           <WrapItem>
//             <Box align="start" mr={2} w="280px">
//               <img
//                 width="280px"
//                 src=" https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_PrettyPowerful_PRIDE_4.jpg"
//                 alt="cream"
//               />
//               <Box className="bold" mb={2} align="start">
//                 DAVID LOPEZ
//               </Box>
//               <Text className="bold">Beauty Content Creator</Text>
//               <Text>
//                 “The beauty of being proud is that you give others the autonomy
//                 to be proud of who they are.”
//               </Text>
//             </Box>
//           </WrapItem>
//         </Wrap>
//       </Center>
//     </Box>
//   );
// };
