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
    console.log("TrendData", data);
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
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
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
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
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
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
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
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
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
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
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
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
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
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
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
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
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
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
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
