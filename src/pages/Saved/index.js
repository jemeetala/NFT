import React from "react";

import { Img, Text, Button, Input, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const SavedPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-outfit items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-evenly w-[100%]">
          <div className="flex flex-col md:hidden sm:hidden items-center justify-start md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] md:w-[100%] sm:w-[100%] w-[21%]">
            <div className="bg-gray_50 border-bw15 border-gray_100 border-solid flex flex-col items-start justify-center p-[18px] w-[100%]">
              <div className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[16px] mt-[16px] md:w-[100%] sm:w-[100%] w-[67%]">
                <div className="flex flex-row font-outfit items-center justify-between w-[100%]">
                  <Img
                    src="images/img_ellipse1015.png"
                    className="h-[56px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[56px]"
                    alt="Ellipse1015"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start w-[62%]">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Kevin Cranel
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      @kecrane
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-urbanist mt-[51px] text-black_900 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  GENERAL
                </Text>
                <div className="flex flex-row font-urbanist gap-[20px] items-center justify-start mt-[25px] pl-[2px] py-[2px] md:w-[100%] sm:w-[100%] w-[75%]">
                  <Img
                    src="images/img_clock_20X20.svg"
                    className="h-[20px] w-[20px]"
                    alt="clock"
                  />
                  <Text
                    className="font-medium text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Dashboard
                  </Text>
                </div>
                <div className="flex flex-row font-urbanist gap-[20px] items-start justify-start mt-[28px] md:w-[100%] sm:w-[100%] w-[66%]">
                  <Img
                    src="images/img_car.svg"
                    className="h-[20px] w-[20px]"
                    alt="car"
                  />
                  <Text
                    className="font-medium mt-[5px] text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Message
                  </Text>
                </div>
                <div className="flex flex-row font-urbanist gap-[20px] items-start justify-start mt-[28px] md:w-[100%] sm:w-[100%] w-[62%]">
                  <Img
                    src="images/img_settings.svg"
                    className="h-[18px] my-[2px] w-[19%]"
                    alt="settings"
                  />
                  <Text
                    className="font-medium mt-[5px] text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Settings
                  </Text>
                </div>
                <Text
                  className="font-urbanist mt-[41px] text-gray_900 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  MARKETPLACE
                </Text>
                <div className="flex flex-row font-urbanist gap-[20px] items-center justify-start mt-[25px] pl-[2px] py-[2px] md:w-[100%] sm:w-[100%] w-[57%]">
                  <Img
                    src="images/img_user_16X14.svg"
                    className="h-[20px] w-[19px]"
                    alt="user"
                  />
                  <Text
                    className="font-medium text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Market
                  </Text>
                </div>
                <div className="flex flex-row font-urbanist gap-[22px] items-center justify-start mt-[28px] md:w-[100%] sm:w-[100%] w-[70%]">
                  <Img
                    src="images/img_judge.svg"
                    className="h-[20px] w-[15%]"
                    alt="judge"
                  />
                  <Text
                    className="font-medium text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Active Bid
                  </Text>
                </div>
              </div>
              <div className="bg-gray_900_5f flex flex-row gap-[20px] items-center justify-start mt-[18px] p-[12px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_favorite.svg"
                  className="h-[17px] ml-[5px] w-[9%]"
                  alt="favorite"
                />
                <Text
                  className="font-medium text-gray_902 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Saved
                </Text>
              </div>
              <div className="flex flex-col font-urbanist items-start justify-start mb-[16px] md:ml-[0] sm:ml-[0] ml-[16px] mt-[31px] md:w-[100%] sm:w-[100%] w-[88%]">
                <Text
                  className="text-gray_900 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  MY PROFILE
                </Text>
                <div className="flex flex-row gap-[20px] items-center justify-start mt-[25px] pl-[2px] py-[2px] md:w-[100%] sm:w-[100%] w-[53%]">
                  <Img
                    src="images/img_user_20X20.svg"
                    className="h-[20px] w-[20px]"
                    alt="user One"
                  />
                  <Text
                    className="font-medium text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Collection
                  </Text>
                </div>
                <div className="flex flex-row gap-[20px] items-center justify-start mt-[28px] pl-[2px] py-[2px] md:w-[100%] sm:w-[100%] w-[40%]">
                  <Img
                    src="images/img_computer.svg"
                    className="h-[18px] w-[23%]"
                    alt="computer"
                  />
                  <Text
                    className="font-medium text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Wallet
                  </Text>
                </div>
                <div className="flex flex-row gap-[20px] items-start justify-start mt-[28px] md:w-[100%] sm:w-[100%] w-[42%]">
                  <Img
                    src="images/img_clock_20X20.svg"
                    className="h-[20px] w-[20px]"
                    alt="clock One"
                  />
                  <Text
                    className="font-medium mt-[5px] text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    History
                  </Text>
                </div>
                <div className="h-[258px] mt-[60px] relative w-[100%]">
                  <div className="absolute bg-gray_902 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-[auto] p-[14px] rounded-radius15 w-[234px]">
                    <Text
                      className="font-semibold mt-[29px] text-left text-white_A700 tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Help Center
                    </Text>
                    <Text
                      className="font-normal leading-[180.00%] mt-[18px] mx-[auto] not-italic text-center text-gray_400 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                      as="h4"
                      variant="h4"
                    >
                      Having trouble in Enefti?
                      <br />
                      Please contact us for more question
                    </Text>
                    <Button
                      className="cursor-pointer font-medium min-w-[100%] mt-[34px] text-[14px] text-center text-gray_902 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                      shape="RoundedBorder10"
                      size="md"
                      variant="FillWhiteA700"
                    >
                      Go To Help Center
                    </Button>
                  </div>
                  <Button
                    className="absolute flex h-[50px] inset-x-[0] items-center justify-center mx-[auto] rounded-radius50 top-[0] w-[50px]"
                    size="lgIcn"
                    variant="icbOutlineGray5003f"
                  >
                    <Img
                      src="images/img_question.svg"
                      className="h-[18px] w-[18px]"
                      alt="question"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-urbanist gap-[38px] items-center justify-start md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] md:w-[100%] sm:w-[100%] w-[80%]">
            <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start outline outline-[0.75px] outline-gray_100 p-[34px] sm:px-[20px] w-[100%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal font-outfit not-italic p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                wrapClassName="flex md:mt-[0] md:w-[100%] my-[2px] sm:mt-[0] sm:mx-[0] sm:w-[100%] w-[45%]"
                name="SearchInput"
                placeholder="Search items, collections, and users"
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer ml-[1px] mr-[18px] my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#93989a"
                      className="cursor-pointer ml-[10px] mr-[22px] my-[auto]"
                      onClick={() => setInputvalue("")}
                    />
                  ) : (
                    ""
                  )
                }
                shape="srcRoundedBorder15"
                size="mdSrc"
                variant="srcOutlineGray300"
              ></Input>
              <Button
                className="flex items-center justify-center md:ml-[0] md:mt-[0] min-w-[13%] ml-[260px] my-[2px] sm:ml-[0] sm:mt-[0] text-center w-[max-content]"
                leftIcon={
                  <Img
                    src="images/img_menu.svg"
                    className="mr-[16px] text-center"
                    alt="sort"
                  />
                }
                shape="RoundedBorder10"
                size="xl"
                variant="OutlineGray100"
              >
                <div className="bg-transparent cursor-pointer font-medium font-urbanist min-w-[13%] text-[16px] text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[max-content]">
                  3,421 ETH
                </div>
              </Button>
              <div className="h-[52px] md:ml-[0] sm:ml-[0] ml-[30px] md:mt-[0] sm:mt-[0] my-[2px] outline outline-[0.75px] outline-gray_100 p-[14px] relative rounded-radius50 w-[52px]">
                <Img
                  src="images/img_notification.svg"
                  className="absolute h-[20px] inset-[0] justify-center m-[auto] w-[31%]"
                  alt="notification"
                />
                <div className="absolute bg-red_600 h-[6px] right-[27%] rounded-radius50 top-[0] w-[6px]"></div>
              </div>
              <Img
                src="images/img_ellipse1015.png"
                className="h-[52px] md:h-[auto] sm:h-[auto] md:ml-[0] sm:ml-[0] ml-[30px] md:mt-[0] sm:mt-[0] my-[2px] rounded-radius50 w-[52px]"
                alt="Ellipse1020"
              />
              <Img
                src="images/img_vector_black_901.svg"
                className="h-[7px] md:ml-[0] sm:ml-[0] ml-[16px] w-[2%]"
                alt="Vector"
              />
            </div>
            <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[94%]">
              <Text
                className="text-black_900 text-left tracking-ls034 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h1"
                variant="h1"
              >
                Saved
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start mt-[25px] w-[100%]">
                <Button
                  className="flex items-center justify-center min-w-[13%] text-center w-[max-content]"
                  leftIcon={
                    <Img
                      src="images/img_user_1.svg"
                      className="mr-[12px] text-center"
                      alt="user"
                    />
                  }
                  shape="RoundedBorder14"
                  size="xl"
                  variant="OutlineGray100"
                >
                  <div className="bg-transparent cursor-pointer font-medium min-w-[13%] text-[16px] text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[max-content]">
                    Category
                  </div>
                </Button>
                <Button
                  className="flex items-center justify-center min-w-[13%] ml-[24px] sm:ml-[0] text-center w-[max-content]"
                  leftIcon={
                    <Img
                      src="images/img_signal.svg"
                      className="mr-[12px] text-center"
                      alt="signal"
                    />
                  }
                  shape="RoundedBorder14"
                  size="xl"
                  variant="OutlineGray100"
                >
                  <div className="bg-transparent cursor-pointer font-medium min-w-[13%] text-[16px] text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[max-content]">
                    Collection
                  </div>
                </Button>
                <Button
                  className="flex items-center justify-center min-w-[15%] ml-[24px] sm:ml-[0] text-center w-[max-content]"
                  leftIcon={
                    <Img
                      src="images/img_clock_1.svg"
                      className="mr-[12px] text-center"
                      alt="clock"
                    />
                  }
                  shape="RoundedBorder14"
                  size="xl"
                  variant="OutlineGray100"
                >
                  <div className="bg-transparent cursor-pointer font-medium min-w-[15%] text-[16px] text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[max-content]">
                    Price Range
                  </div>
                </Button>
                <Button
                  className="flex items-center justify-center min-w-[15%] ml-[447px] sm:ml-[0] text-center w-[max-content]"
                  leftIcon={
                    <Img
                      src="images/img_menu.svg"
                      className="mr-[13px] text-center"
                      alt="menu"
                    />
                  }
                  shape="RoundedBorder14"
                  size="xl"
                  variant="OutlineGray100"
                >
                  <div className="bg-transparent cursor-pointer font-medium min-w-[15%] text-[16px] text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[max-content]">
                    Filter & Sort
                  </div>
                </Button>
              </div>
              <List
                className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[34px] w-[100%]"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-col gap-[22px] items-center justify-start p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-row gap-[8px] items-start justify-end p-[8px] rounded-radius12 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_duration.png')",
                    }}
                  >
                    <Button
                      className="cursor-pointer font-medium mb-[95px] min-w-[34%] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                      shape="RoundedBorder14"
                      size="sm"
                      variant="Outline"
                    >
                      2h 4m 32s
                    </Button>
                    <Button
                      className="flex h-[30px] items-center justify-center mb-[94px] rounded-radius50 w-[30px]"
                      size="smIcn"
                      variant="icbOutline"
                    >
                      <Img
                        src="images/img_favorite_30X30.svg"
                        className=""
                        alt="favorite One"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start mb-[12px] md:w-[100%] sm:w-[100%] w-[94%]">
                    <Text
                      className="text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Diehard BATTERY-SILVER
                    </Text>
                    <Text
                      className="mt-[6px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      By Ralph Edwards
                    </Text>
                    <div className="flex flex-row items-center justify-evenly mt-[18px] w-[100%]">
                      <div className="flex flex-col font-outfit items-start justify-start w-[61%]">
                        <Text
                          className="not-italic text-gray_500 text-left tracking-ls01 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Current Bid
                        </Text>
                        <div className="flex flex-row font-urbanist gap-[10px] items-start justify-start mt-[5px] md:w-[100%] sm:w-[100%] w-[58%]">
                          <Img
                            src="images/img_menu.svg"
                            className="h-[13px] ml-[3px] w-[9%]"
                            alt="sort"
                          />
                          <Text
                            className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            2,78 ETH
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-medium font-urbanist min-w-[40%] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                        shape="RoundedBorder10"
                        size="sm"
                        variant="FillGray902"
                      >
                        Place a Bid
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col gap-[24px] items-center justify-start p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-row gap-[8px] items-start justify-end p-[8px] rounded-radius12 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_duration_140X240.png')",
                    }}
                  >
                    <Text
                      className="bg-gray_900_26 h-[28px] mb-[95px] pb-[9px] pl-[10px] pt-[6px] rounded-radius14 text-left text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[75px]"
                      as="h5"
                      variant="h5"
                    >
                      Ended
                    </Text>
                    <Button
                      className="flex h-[30px] items-center justify-center mb-[94px] rounded-radius50 w-[30px]"
                      size="smIcn"
                      variant="icbOutline"
                    >
                      <Img
                        src="images/img_favorite_30X30.svg"
                        className=""
                        alt="favorite Two"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start mb-[12px] md:w-[100%] sm:w-[100%] w-[94%]">
                    <Text
                      className="text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Bosch Spark Plug
                    </Text>
                    <Text
                      className="mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      By Guy Hawkins
                    </Text>
                    <div className="flex flex-row items-center justify-evenly mt-[18px] w-[100%]">
                      <div className="flex flex-col font-outfit items-start justify-start w-[61%]">
                        <Text
                          className="not-italic text-gray_500 text-left tracking-ls01 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Fixed Price
                        </Text>
                        <div className="flex flex-row font-urbanist gap-[10px] items-start justify-start mt-[5px] md:w-[100%] sm:w-[100%] w-[57%]">
                          <Img
                            src="images/img_menu.svg"
                            className="h-[13px] ml-[3px] w-[10%]"
                            alt="sort One"
                          />
                          <Text
                            className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            8,99 ETH
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-medium font-urbanist min-w-[40%] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                        shape="RoundedBorder10"
                        size="sm"
                        variant="FillGray902"
                      >
                        Place a Bid
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col gap-[24px] items-center justify-start p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-row gap-[8px] items-start justify-end p-[8px] rounded-radius12 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_duration_1.png')",
                    }}
                  >
                    <Text
                      className="bg-gray_900_26 h-[28px] mb-[95px] pb-[9px] pl-[10px] pt-[6px] rounded-radius14 text-left text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[75px]"
                      as="h5"
                      variant="h5"
                    >
                      Ended
                    </Text>
                    <Button
                      className="flex h-[30px] items-center justify-center mb-[94px] rounded-radius50 w-[30px]"
                      size="smIcn"
                      variant="icbOutline"
                    >
                      <Img
                        src="images/img_favorite_30X30.svg"
                        className=""
                        alt="favorite Three"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start mb-[12px] md:w-[100%] sm:w-[100%] w-[94%]">
                    <Text
                      className="text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Valvoline Engine Oil
                    </Text>
                    <Text
                      className="mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      By Albert Flores
                    </Text>
                    <div className="flex flex-row items-center justify-evenly mt-[18px] w-[100%]">
                      <div className="flex flex-col font-outfit items-start justify-start w-[61%]">
                        <Text
                          className="not-italic text-gray_500 text-left tracking-ls01 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Fixed Price
                        </Text>
                        <div className="flex flex-row font-urbanist gap-[10px] items-start justify-start mt-[5px] md:w-[100%] sm:w-[100%] w-[61%]">
                          <Img
                            src="images/img_menu.svg"
                            className="h-[13px] ml-[3px] w-[9%]"
                            alt="sort Two"
                          />
                          <Text
                            className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            51,23 ETH
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-medium font-urbanist min-w-[40%] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                        shape="RoundedBorder10"
                        size="sm"
                        variant="FillGray902"
                      >
                        Place a Bid
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col gap-[22px] items-center justify-start p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-row gap-[8px] items-start justify-end p-[8px] rounded-radius12 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_duration_2.png')",
                    }}
                  >
                    <Button
                      className="cursor-pointer font-medium mb-[95px] min-w-[34%] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                      shape="RoundedBorder14"
                      size="sm"
                      variant="Outline"
                    >
                      2h 4m 32s
                    </Button>
                    <Button
                      className="flex h-[30px] items-center justify-center mb-[94px] rounded-radius50 w-[30px]"
                      size="smIcn"
                      variant="icbOutline"
                    >
                      <Img
                        src="images/img_favorite_30X30.svg"
                        className=""
                        alt="favorite Four"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start mb-[12px] md:w-[100%] sm:w-[100%] w-[94%]">
                    <Text
                      className="text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Fram Oil Filter
                    </Text>
                    <Text
                      className="mt-[6px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      By Jerome Bell
                    </Text>
                    <div className="flex flex-row items-center justify-evenly mt-[18px] w-[100%]">
                      <div className="flex flex-col font-outfit items-start justify-start w-[61%]">
                        <Text
                          className="not-italic text-gray_500 text-left tracking-ls01 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Current Bid
                        </Text>
                        <div className="flex flex-row font-urbanist gap-[10px] items-start justify-start mt-[5px] md:w-[100%] sm:w-[100%] w-[63%]">
                          <Img
                            src="images/img_menu.svg"
                            className="h-[13px] ml-[3px] w-[9%]"
                            alt="sort Three"
                          />
                          <Text
                            className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            25,00 ETH
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-medium font-urbanist min-w-[40%] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                        shape="RoundedBorder10"
                        size="sm"
                        variant="FillGray902"
                      >
                        Place a Bid
                      </Button>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SavedPage;
