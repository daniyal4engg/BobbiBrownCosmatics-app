// TRENDING NEW SKINCARE
import "../../styles/TrendingSection.css";
import {
  Box,
  HStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
export const TrendingSection = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getTrendData();
  });
  const getTrendData = () => {
    axios({
      url: "https://makeup-api.herokuapp.com/api/v1/products.json",
      method: "get",
    })
      .then((r) => setData(r.data))
      .catch((e) => console.log(e.data));
    // console.log("TrendData", data);
  };
  return (
    <Box m={1} w="100%">
      <HStack justify="center" height="100px">
        <Box h="80px" p={4} className="Trendfont" fontSize="70px">
          GOTTA HAVE IT
        </Box>
      </HStack>
      <Box m={7}>
        <Center>
          <Tabs colorScheme="black" width="100%" align="center">
            <TabList>
              <Tab>TRENDING NOW</Tab>
              <Tab>NEW</Tab>
              <Tab>SKINCARE</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                {/* <div classNameNameNameName="grid">
                  {data.map((item) => {
                    return (
                      <div>
                        <img
                          src={item.api_featured_image}
                          alt=""
                          boxSize="300px"
                          classNameNameNameName="objectFit"
                        />
                        <Box align="start">
                          <Box>{item.brand}</Box>
                        </Box>
                      </div>
                    );
                  })}
                </div> */}

                <div className="container my-5">
                  <div
                    id="multi-item-example"
                    className="carousel slide carousel-multi-item"
                    data-ride="carousel"
                  >
                    <div className="controls-top">
                      <a
                        className="btn-floating"
                        href="#multi-item-example"
                        data-slide="prev"
                      >
                        <i className="fa fa-chevron-left"></i>
                      </a>
                      <a
                        className="btn-floating"
                        href="#multi-item-example"
                        data-slide="next"
                      >
                        <i className="fa fa-chevron-right"></i>
                      </a>
                    </div>

                    <ol className="carousel-indicators">
                      <li
                        data-target="#multi-item-example"
                        data-slide-to="0"
                        className="active"
                      ></li>
                      <li
                        data-target="#multi-item-example"
                        data-slide-to="1"
                      ></li>
                      <li
                        data-target="#multi-item-example"
                        data-slide-to="2"
                      ></li>
                    </ol>

                    <div className="carousel-inner" role="listbox">
                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="card mb-2">
                              <img
                                className="card-img-top"
                                src="https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E9GP01_600x600_0.jpg"
                                alt="Card  cap"
                              />
                              <div className="card-body">
                                <h4 className="card-title">
                                  No Smudge Mascara
                                </h4>
                                <p className="card-text">
                                  Volumizes & lengthens without smudging
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 clearfix d-none d-md-block">
                            <div className="card mb-2">
                              <img
                                className="card-img-top"
                                src="https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EGXR17_600x600_0.jpg"
                                alt="Card  cap"
                              />
                              <div className="card-body">
                                <h4 className="card-title">
                                  Natural (N-052 / 4)
                                </h4>
                                <p className="card-text">
                                  16-hour, breathable, natural matte coverage
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 clearfix d-none d-md-block">
                            <div className="card mb-2">
                              <img
                                className="card-img-top"
                                src="https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E1LM01_600x600_0.jpg"
                                alt="Card  cap"
                              />
                              <div className="card-body">
                                <h4 className="card-title">
                                  Vitamin Enriched Face Base
                                </h4>
                                <p className="card-text">
                                  Multitasking, moisturizing primer
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="card mb-2">
                              <img
                                className="card-img-top"
                                src="https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E1LM01_600x600_0.jpg"
                                alt="Card cap"
                              />
                              <div className="card-body">
                                <h4 className="card-title">
                                  Vitamin Enriched Face Base
                                </h4>
                                <p className="card-text">
                                  Multitasking, moisturizing primer
                                </p>
                                <a href="google" className="btn btn-primary">
                                  Button
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 clearfix d-none d-md-block">
                            <div className="card mb-2">
                              <img
                                className="card-img-top"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                                alt="Card  cap"
                              />
                              <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </p>
                                <a href="google" className="btn btn-primary">
                                  Button
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 clearfix d-none d-md-block">
                            <div className="card mb-2">
                              <img
                                className="card-img-top"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"
                                alt="Card  cap"
                              />
                              <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </p>
                                <a href="google" className="btn btn-primary">
                                  Button
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="card mb-2">
                              <img
                                className="card-img-top"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"
                                alt="Card  cap"
                              />
                              <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </p>
                                <a href="google" className="btn btn-primary">
                                  Button
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 clearfix d-none d-md-block">
                            <div className="card mb-2">
                              <img
                                className="card-img-top"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                                alt="Card  cap"
                              />
                              <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </p>
                                <a href="google" className="btn btn-primary">
                                  Button
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 clearfix d-none d-md-block">
                            <div className="card mb-2">
                              <img
                                className="card-img-top"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
                                alt="Card  cap"
                              />
                              <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </p>
                                <a href="google" className="btn btn-primary">
                                  Button
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              {/*NEW section */}
              <TabPanel>
                <div className="container my-5">
                  <hr className="my-5" />

                  <div
                    id="multi-item-example"
                    className="carousel slide carousel-multi-item"
                    data-ride="carousel"
                  >
                    <div className="controls-top">
                      <a
                        className="btn-floating"
                        href="#multi-item-example"
                        data-slide="prev"
                      >
                        <i className="fa fa-chevron-left"></i>
                      </a>
                      <a
                        className="btn-floating"
                        href="#multi-item-example"
                        data-slide="next"
                      >
                        <i className="fa fa-chevron-right"></i>
                      </a>
                    </div>

                    <ol className="carousel-indicators">
                      <li
                        data-target="#multi-item-example"
                        data-slide-to="0"
                        className="active"
                      ></li>
                      <li
                        data-target="#multi-item-example"
                        data-slide-to="1"
                      ></li>
                      <li
                        data-target="#multi-item-example"
                        data-slide-to="2"
                      ></li>
                    </ol>

                    <div className="carousel-inner" role="listbox">
                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="card mb-2">
                              <img
                                className="card-img-top"
                                src="https://m.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_EPTA03_1080x1080_0.jpg"
                                alt="Card  cap"
                              />
                              <div className="card-body">
                                <h4 className="card-title">Free Sprit</h4>
                                <p className="card-text">
                                  Crushed Oil-Infused Gloss
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 clearfix d-none d-md-block">
                            <div className="card mb-2">
                              <img
                                className="card-img-top"
                                src="https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETCY12_600x600_0.jpg"
                                alt="Card  cap"
                              />
                              <div className="card-body">
                                <h4 className="card-title">Bare Claret</h4>
                                <p className="card-text">Extra Lip Tint</p>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 clearfix d-none d-md-block">
                            <div className="card mb-2">
                              <img
                                className="card-img-top"
                                src="https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E96E51_600x600_0.jpg"
                                alt="Card  cap"
                              />
                              <div className="card-body">
                                <h4 className="card-title">Moonstone New</h4>
                                <p className="card-text">
                                  Our ultimate quick eye shadow stick
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="card mb-2">
                              <img
                                className="card-img-top"
                                src="https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E1LM01_600x600_0.jpg"
                                alt="Card cap"
                              />
                              <div className="card-body">
                                <h4 className="card-title">
                                  Vitamin Enriched Face Base
                                </h4>
                                <p className="card-text">
                                  Multitasking, moisturizing primer
                                </p>
                                <a href="google" className="btn btn-primary">
                                  Button
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 clearfix d-none d-md-block">
                            <div className="card mb-2">
                              <img
                                className="card-img-top"
                                src="https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E0KK01_600x600_0.jpg"
                                alt="Card  cap"
                              />
                              <div className="card-body">
                                <h4 className="card-title">Espresso Ink</h4>
                                <p className="card-text">
                                  Long-Wear Gel Eyeliner
                                </p>
                                <a href="google" className="btn btn-primary">
                                  Button
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 clearfix d-none d-md-block">
                            <div className="card mb-2">
                              <img
                                className="card-img-top"
                                src="https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EGXR17_600x600_0.jpg"
                                alt="Card  cap"
                              />
                              <div className="card-body">
                                <h4 className="card-title">
                                  Natural (N-052 / 4)
                                </h4>
                                <p className="card-text">
                                  Skin Long-Wear Weightless Foundation SPF 15
                                </p>
                                <a href="google" className="btn btn-primary">
                                  Button
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="card mb-2">
                              <img
                                className="card-img-top"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"
                                alt="Card  cap"
                              />
                              <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </p>
                                <a href="google" className="btn btn-primary">
                                  Button
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 clearfix d-none d-md-block">
                            <div className="card mb-2">
                              <img
                                className="card-img-top"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                                alt="Card  cap"
                              />
                              <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </p>
                                <a href="google" className="btn btn-primary">
                                  Button
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 clearfix d-none d-md-block">
                            <div className="card mb-2">
                              <img
                                className="card-img-top"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
                                alt="Card  cap"
                              />
                              <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </p>
                                <a href="google" className="btn btn-primary">
                                  Button
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>

              {/*skinCare section */}
              <TabPanel>
                <div className="container my-5">
                  <hr className="my-5" />

                  <div
                    id="multi-item-example"
                    className="carousel slide carousel-multi-item"
                    data-ride="carousel"
                  >
                    <div className="controls-top">
                      <a
                        className="btn-floating"
                        href="#multi-item-example"
                        data-slide="prev"
                      >
                        <i className="fa fa-chevron-left"></i>
                      </a>
                      <a
                        className="btn-floating"
                        href="#multi-item-example"
                        data-slide="next"
                      >
                        <i className="fa fa-chevron-right"></i>
                      </a>
                    </div>

                    <ol className="carousel-indicators">
                      <li
                        data-target="#multi-item-example"
                        data-slide-to="0"
                        className="active"
                      ></li>
                      <li
                        data-target="#multi-item-example"
                        data-slide-to="1"
                      ></li>
                      <li
                        data-target="#multi-item-example"
                        data-slide-to="2"
                      ></li>
                    </ol>

                    <div className="carousel-inner" role="listbox">
                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="card mb-2">
                              <img
                                className="card-img-top"
                                src="https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ET7E01_600x600_0.jpg"
                                alt="Card  cap"
                              />
                              <div className="card-body">
                                <h4 className="card-title">
                                  Deluxe Size Soothing Cleansing Oil
                                </h4>
                                <p className="card-text">
                                  Deluxe Size Soothing Cleansing Oil
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 clearfix d-none d-md-block">
                            <div className="card mb-2">
                              <img
                                className="card-img-top"
                                src="https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EKLT01_600x600_0.jpg"
                                alt="Card  cap"
                              />
                              <div className="card-body">
                                <h4 className="card-title">
                                  Primer Plus Protection SPF 50
                                </h4>
                                <p className="card-text">
                                  Protective face primer
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 clearfix d-none d-md-block">
                            <div className="card mb-2">
                              <img
                                className="card-img-top"
                                src="https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERAN01_600x600_0.jpg"
                                alt="Card  cap"
                              />
                              <div className="card-body">
                                <h4 className="card-title">
                                  Extra Cleansing Balm
                                </h4>
                                <p className="card-text">
                                  Purifying, conditioning cleanser
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="card mb-2">
                              <img
                                className="card-img-top"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                                alt="Card cap"
                              />
                              <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </p>
                                <a href="google" className="btn btn-primary">
                                  Button
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 clearfix d-none d-md-block">
                            <div className="card mb-2">
                              <img
                                className="card-img-top"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                                alt="Card  cap"
                              />
                              <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </p>
                                <a href="google" className="btn btn-primary">
                                  Button
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 clearfix d-none d-md-block">
                            <div className="card mb-2">
                              <img
                                className="card-img-top"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"
                                alt="Card  cap"
                              />
                              <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </p>
                                <a href="google" className="btn btn-primary">
                                  Button
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="card mb-2">
                              <img
                                className="card-img-top"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"
                                alt="Card  cap"
                              />
                              <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </p>
                                <a href="google" className="btn btn-primary">
                                  Button
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 clearfix d-none d-md-block">
                            <div className="card mb-2">
                              <img
                                className="card-img-top"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                                alt="Card  cap"
                              />
                              <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </p>
                                <a href="google" className="btn btn-primary">
                                  Button
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 clearfix d-none d-md-block">
                            <div className="card mb-2">
                              <img
                                className="card-img-top"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
                                alt="Card  cap"
                              />
                              <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </p>
                                <a href="google" className="btn btn-primary">
                                  Button
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Center>
      </Box>
    </Box>
  );
};
