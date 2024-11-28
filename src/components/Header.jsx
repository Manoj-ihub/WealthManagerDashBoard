import React from "react";
import { FaArrowUp } from "react-icons/fa6";
import { LuCircleDollarSign } from "react-icons/lu";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi2";
import { BsBank } from "react-icons/bs";
import { AiOutlineSelect } from "react-icons/ai";
import { BarChart } from "@mui/x-charts/BarChart";
import { addLabels, balanceSheet } from "./netflixsBalanceSheet";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { ScatterChart } from "@mui/x-charts/ScatterChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));

const dataset = [
  {
    version: "data-0",
    a1: 329.39,
    a2: 391.29,
    b1: 443.28,
    b2: 153.9,
  },
  {
    version: "data-1",
    a1: 96.94,
    a2: 139.6,
    b1: 110.5,
    b2: 217.8,
  },
  {
    version: "data-2",
    a1: 336.35,
    a2: 282.34,
    b1: 175.23,
    b2: 286.32,
  },
  {
    version: "data-3",
    a1: 159.44,
    a2: 384.85,
    b1: 195.97,
    b2: 325.12,
  },
  {
    version: "data-4",
    a1: 188.86,
    a2: 182.27,
    b1: 351.77,
    b2: 144.58,
  },
  {
    version: "data-5",
    a1: 143.86,
    a2: 360.22,
    b1: 43.253,
    b2: 146.51,
  },
  {
    version: "data-6",
    a1: 202.02,
    a2: 209.5,
    b1: 376.34,
    b2: 309.69,
  },
  {
    version: "data-7",
    a1: 384.41,
    a2: 258.93,
    b1: 31.514,
    b2: 236.38,
  },
  {
    version: "data-8",
    a1: 256.76,
    a2: 70.571,
    b1: 231.31,
    b2: 440.72,
  },
  {
    version: "data-9",
    a1: 143.79,
    a2: 419.02,
    b1: 108.04,
    b2: 20.29,
  },
];

const chartSetting = {
  yAxis: [
    {
      label: "rainfall (mm)",
    },
  ],
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
    },
  },
  width: 500,
  height: 300,
};

const Header = () => {
  return (
    <div style={{ backgroundColor: "#f3f3f3", paddingBottom: "10px" }}>
      <div>
        <h1
          style={{
            textAlign: "left",
            marginLeft: "2%",
            marginTop: "10px",
            color: "#544e4e",
          }}
        >
          JAMESON WEALTH
        </h1>
      </div>
      <div style={{ marginLeft: "2%", textAlign: "left", color: "#636f7a" }}>
        <p>
          Date as of june 6, 2024 10.03am and based off 98% off your total
          holdings.
        </p>
      </div>

      {/* Banner Section */}
      <div
        className="bannerNitrogeWM"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {/* 1st Container */}

        <div
          style={{
            width: "18%",
            height: "120px",
            backgroundColor: "white",
            borderRadius: "10px",
            border: "1px solid #d9cbcb",
          }}
        >
          <div
            style={{
              height: "50%",
              alignItems: "center",
              display: "flex",
              paddingLeft: "5px",
            }}
          >
            <LuCircleDollarSign
              style={{ color: "#63E6BE", marginRight: "10px" }}
            />
            AUM
          </div>
          <div
            style={{
              display: "flex",
              height: "50%",
              gap: "10px",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div style={{ textAlign: "right", width: "50%", fontSize: "2rem" }}>
              $ 449 M
            </div>
            <div
              style={{
                textAlign: "left",
                width: "50%",
                fontSize: "1.5rem",
                color: "green",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaArrowUp /> 26.6%
            </div>
          </div>
        </div>

        {/* 2nd Container */}
        <div
          style={{
            width: "18%",
            height: "120px",
            backgroundColor: "white",
            borderRadius: "10px",
            border: "1px solid #d9cbcb",
          }}
        >
          <div
            style={{
              height: "50%",
              alignItems: "center",
              display: "flex",
              paddingLeft: "5px",
            }}
          >
            <HiUsers style={{ color: "#63E6BE", marginRight: "10px" }} />
            Total ADVISORS
          </div>
          <div
            style={{
              display: "flex",
              height: "50%",
              gap: "10px",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div style={{ textAlign: "right", width: "50%", fontSize: "2rem" }}>
              $ 449 M
            </div>
            <div
              style={{
                textAlign: "left",
                width: "50%",
                fontSize: "1.5rem",
                color: "green",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaArrowUp /> 26.6%
            </div>
          </div>
        </div>

        {/* 3rd Container */}
        <div
          style={{
            width: "18%",
            height: "120px",
            backgroundColor: "white",
            borderRadius: "10px",
            border: "1px solid #d9cbcb",
          }}
        >
          <div
            style={{
              height: "50%",
              alignItems: "center",
              display: "flex",
              paddingLeft: "5px",
            }}
          >
            <RiAccountPinCircleFill
              style={{ color: "#63E6BE", marginRight: "10px" }}
            />
            TOTAL CLIENTS
          </div>
          <div
            style={{
              display: "flex",
              height: "50%",
              gap: "10px",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div style={{ textAlign: "right", width: "50%", fontSize: "2rem" }}>
              $ 449 M
            </div>
            <div
              style={{
                textAlign: "left",
                width: "50%",
                fontSize: "1.5rem",
                color: "green",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaArrowUp /> 26.6%
            </div>
          </div>
        </div>

        {/* 4th Container */}
        <div
          style={{
            width: "18%",
            height: "120px",
            backgroundColor: "white",
            borderRadius: "10px",
            border: "1px solid #d9cbcb",
          }}
        >
          <div
            style={{
              height: "50%",
              alignItems: "center",
              display: "flex",
              paddingLeft: "5px",
            }}
          >
            <BsBank style={{ color: "#63E6BE", marginRight: "10px" }} />
            TOTAL ACCOUNTS
          </div>
          <div
            style={{
              display: "flex",
              height: "50%",
              gap: "10px",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div style={{ textAlign: "right", width: "50%", fontSize: "2rem" }}>
              $ 449 M{" "}
            </div>
            <div
              style={{
                textAlign: "left",
                width: "50%",
                fontSize: "1.5rem",
                color: "green",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaArrowUp /> 26.6%
            </div>
          </div>
        </div>

        {/* 5th Container */}
        <div
          style={{
            width: "18%",
            height: "120px",
            backgroundColor: "white",
            borderRadius: "10px",
            border: "1px solid #d9cbcb",
          }}
        >
          <div
            style={{
              height: "50%",
              alignItems: "center",
              display: "flex",
              paddingLeft: "5px",
            }}
          >
            <AiOutlineSelect
              style={{ color: "#63E6BE", marginRight: "10px" }}
            />
            CLIENTS WITH RISK NUMBER
          </div>
          <div
            style={{
              display: "flex",
              height: "50%",
              gap: "10px",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div style={{ textAlign: "right", width: "50%", fontSize: "2rem" }}>
              $ 449 M
            </div>
            <div
              style={{
                textAlign: "left",
                width: "50%",
                fontSize: "1.5rem",
                color: "green",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaArrowUp /> 26.6%
            </div>
          </div>
        </div>
      </div>

      {/*Chart Section*/}
      <div
        className="chartSection"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "#f3f3f3",
          paddingTop: "30px",
        }}
      >
        <div
          className="chartSectionLeft"
          style={{
            width: "48%",
            height: "459px",
            backgroundColor: "white",
            border: "1px solid #d9cbcb",
            borderRadius: "10px",
            padding: "10px 20px",
          }}
        >
          <div style={{ textAlign: "left" }}>
            <h2>AUM Growth (USD)</h2>
            <p>Benchmarked against firms of your size</p>
          </div>

          {/*BAR CHART SECTION*/}

          <div>
            <BarChart
              dataset={balanceSheet}
              series={addLabels([
                { dataKey: "currAss", stack: "assets" },
                { dataKey: "nCurrAss", stack: "assets" },
                { dataKey: "curLia", stack: "liability" },
                { dataKey: "nCurLia", stack: "liability" },
                { dataKey: "capStock", stack: "equity" },
                { dataKey: "retEarn", stack: "equity" },
                { dataKey: "treas", stack: "equity" },
              ])}
              xAxis={[{ scaleType: "band", dataKey: "year" }]}
              slotProps={{ legend: { hidden: true } }}
              height={350}
              sx={{ width: "100%" }}
            />
          </div>
        </div>
        <div
          className="chartSectionRight"
          style={{
            width: "47%",
            height: "459px",
            backgroundColor: "white",
            border: "1px solid #d9cbcb",
            borderRadius: "10px",
            padding: "10px 20px",
          }}
        >
          <div style={{ textAlign: "left" }}>
            <h2>AUM Analytics</h2>
            <p>
              Current risk and cost metrics benchmarked against firms of your
              size
            </p>
          </div>

          {/* Chart Right Section <Div> 4 elements*/}

          <div className="chart_sec_1st_div" style={{ height: "150px" }}>
            <div
              className="chart_sec_2nd_div"
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                height: "50%",
              }}
            >
              {/*First element*/}

              <div
                style={{
                  width: "48%",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  border: "1px solid #d9cbcb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingLeft: "10px",
                  textAlign: "left",
                }}
              >
                <div>
                  <h5>Jameson Wealth</h5>
                  <p>Risk Number</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h6 style={{ color: "green" }}>
                      <FaArrowUp />3
                    </h6>
                  </div>
                  <div
                    style={{
                      border: "1px solid #d9cbcb",
                      marginRight: "10px",
                      height: "65px",
                      width: "65px",
                      textAlign: "center",
                    }}
                  >
                    RISK
                    <h3>75</h3>
                  </div>
                </div>
              </div>

              {/*Second Element*/}
              <div
                style={{
                  width: "48%",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  border: "1px solid #d9cbcb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingLeft: "10px",
                  textAlign: "left",
                }}
              >
                <div>
                  <h5>Jameson Wealth</h5>
                  <p>Risk Number</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h6 style={{ color: "green" }}>
                      <FaArrowUp />3
                    </h6>
                  </div>
                  <div
                    style={{
                      border: "1px solid #d9cbcb",
                      marginRight: "10px",
                      height: "65px",
                      width: "65px",
                      textAlign: "center",
                    }}
                  >
                    RISK
                    <h3>75</h3>
                  </div>
                </div>
              </div>
            </div>

            {/*2nd order Div Down*/}

            {/* 2nd order 1 element */}

            <div
              className="chart_sec_2nd_div"
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                height: "50%",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  width: "48%",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  border: "1px solid #d9cbcb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingLeft: "10px",
                  textAlign: "left",
                }}
              >
                <div>
                  <h5>Jameson Wealth</h5>
                  <p>Risk Number</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h6 style={{ color: "green" }}>
                      <FaArrowUp />3
                    </h6>
                  </div>
                  <div
                    style={{
                      border: "1px solid #d9cbcb",
                      marginRight: "10px",
                      height: "65px",
                      width: "65px",
                      textAlign: "center",
                    }}
                  >
                    RISK
                    <h3>75</h3>
                  </div>
                </div>
              </div>

              {/*  2nd order 2 element */}

              <div
                style={{
                  width: "48%",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  border: "1px solid #d9cbcb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingLeft: "10px",
                  textAlign: "left",
                }}
              >
                <div>
                  <h5>Jameson Wealth</h5>
                  <p>Risk Number</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h6 style={{ color: "green" }}>
                      <FaArrowUp />3
                    </h6>
                  </div>
                  <div
                    style={{
                      border: "1px solid #d9cbcb",
                      marginRight: "10px",
                      height: "65px",
                      width: "65px",
                      textAlign: "center",
                    }}
                  >
                    RISK
                    <h3>75</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "20px" }}>
            <h4 style={{ textAlign: "left" }}>
              95% Historical Range (6 Months)
            </h4>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                paddingTop: "10px",
              }}
            >
              <div
                style={{
                  borderRight: "1px solid black",
                  width: "50%",
                  textAlign: "right",
                  paddingRight: "15px",
                }}
              >
                <h5 style={{ color: "red" }}>-$63,233,700</h5>
                <p style={{ marginBottom: "0px" }}>-14.5%</p>
              </div>
              <div
                style={{ width: "50%", textAlign: "left", paddingLeft: "15px" }}
              >
                <h5 style={{ color: "green" }}>+$92,755,400</h5>
                <p style={{ marginBottom: "0px" }}>+26.5%</p>
              </div>
            </div>
          </div>

          {/*Below Percentage*/}

          <div style={{ marginTop: "15px", display: "flex", height: "10px" }}>
            <div
              style={{
                height: "10px",
                width: "35%",
                backgroundColor: "red",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            ></div>
            <div
              style={{
                height: "10px",
                width: "65%",
                backgroundColor: "green",
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* CLIENT  SECTION */}

      <div
        style={{
          height: "460px",
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "#f3f3f3",
          paddingTop: "10px",
        }}
      >
        {/*CLIENT SECTION LEFT SIDE*/}

        <div
          style={{
            borderRadius: "10px",
            width: "48%",
          }}
        >
          {/* LEFT SIDE UPPER DIV */}
          <div style={{ height: "100%" }}>
            <div
              style={{
                borderRadius: "10px",
                border: "1px solid #d9cbcb",
                backgroundColor: "white",
                width: "100%",
                height: "38%",
                margin: "10px 0px",
                textAlign: "left",
                paddingLeft: "20px",
              }}
            >
              {/*upperdiv upper container*/}
              <div style={{ paddingTop: "10px" }}>
                <h2>Client Risk alignment</h2>
                <p>Accounts aligned to investment objectives</p>
              </div>

              {/*upperdiv lower 4 container*/}

              <div style={{ display: "flex", height: "35%", gap: "5px" }}>
                <div
                  style={{
                    borderRadius: "10px",
                    border: "1px solid #d9cbcb",
                    width: "23%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0px 10px",
                    }}
                  >
                    <div>To High</div>
                    <div>
                      <h6> 45%</h6>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <FaArrowUp /> 0.15 %{" "}
                  </div>
                </div>

                <div
                  style={{
                    borderRadius: "10px",
                    border: "1px solid #d9cbcb",
                    width: "23%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0px 10px",
                    }}
                  >
                    <div>To High</div>
                    <div>
                      <h6> 45%</h6>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <FaArrowUp /> 0.15 %{" "}
                  </div>
                </div>

                <div
                  style={{
                    borderRadius: "10px",
                    border: "1px solid #d9cbcb",
                    width: "23%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0px 10px",
                    }}
                  >
                    <div>To High</div>
                    <div>
                      <h6> 45%</h6>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <FaArrowUp /> 0.15 %{" "}
                  </div>
                </div>

                <div
                  style={{
                    borderRadius: "10px",
                    border: "1px solid #d9cbcb",
                    width: "23%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0px 10px",
                    }}
                  >
                    <div>To High</div>
                    <div>
                      <h6> 45%</h6>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <FaArrowUp /> 0.15 %{" "}
                  </div>
                </div>
              </div>
            </div>

            {/* LEFT SIDE LOWER DIV */}

            <div
              style={{
                borderRadius: "10px",
                border: "1px solid #d9cbcb",
                backgroundColor: "white",
                height: "53%",
                margin: "10px 0px",
                textAlign: "left",
                padding: "10px 20px",
              }}
            >
              <div>
                <h2>PortFolio Costs</h2>
              </div>
              <div>
                <Stack spacing={2} sx={{ flexGrow: 1 }}>
                  <br></br>
                  <BorderLinearProgress variant="determinate" value={50} />
                </Stack>
              </div>
              <div style={{ display: "flex", height: "45%", gap: "5px" }}>
                <div
                  style={{
                    borderRadius: "10px",
                    border: "1px solid #d9cbcb",
                    width: "31%",
                    marginTop: "30px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0px 10px",
                    }}
                  >
                    <div>To High</div>
                    <div>
                      <h6> 45%</h6>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <FaArrowUp /> 0.15 %{" "}
                  </div>
                </div>

                <div
                  style={{
                    borderRadius: "10px",
                    border: "1px solid #d9cbcb",
                    width: "31%",
                    marginTop: "30px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0px 10px",
                    }}
                  >
                    <div>To High</div>
                    <div>
                      <h6> 45%</h6>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <FaArrowUp /> 0.15 %{" "}
                  </div>
                </div>

                <div
                  style={{
                    borderRadius: "10px",
                    border: "1px solid #d9cbcb",
                    width: "31%",
                    marginTop: "30px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0px 10px",
                    }}
                  >
                    <div>To High</div>
                    <div>
                      <h6> 45%</h6>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <FaArrowUp /> 0.15 %{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*CLIENT SECTION RIGHT SIDE*/}

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            border: "1px solid #d9cbcb",
            width: "47%",
            textAlign: "left",
            marginTop: "10px",
            marginBottom: "20px",
            paddingLeft: "20px",
          }}
        >
          <div style={{ paddingTop: "10px" }}>
            <h2>Client Risk alignment</h2>
            <p>Accounts aligned to investment objectives</p>
          </div>

          <div>
            <ScatterChart
              dataset={dataset}
              series={[
                {
                  datasetKeys: { id: "version", x: "a1", y: "a2" },
                  label: "Series A",
                },
                {
                  datasetKeys: { id: "version", x: "b1", y: "b2" },
                  label: "Series B",
                },
              ]}
              {...chartSetting}
            />
          </div>
        </div>
      </div>

      {/*Bottom Div*/}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          border: "1px solid #d9cbcb",
          textAlign: "left",
          marginTop: "10px",
          margin: "0px 25px",
          padding: "20px",
        }}
      >
        <div>
          <h2>Stress Test</h2>
          <p>
            Snapshot of Historical market events applied to the holdings across
            your books.
          </p>
        </div>

        {/*Bottom div flex containers*/}

        <div style={{ display: "flex", marginTop: "10px" }}>
          {/*Div container bottom flex*/}

          <div
            style={{
              width: "31%",
              border: "1px solid #d9cbcb",
              textAlign: "left",
              margin: "10px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <div>
              <h5>
                If a <b>2013 Bull Market</b> happened again ...
              </h5>
              <p>Dec.31, 2012 - Dec.30, 2013</p>
            </div>

            <div style={{}} className="bottomFlex">
              <div
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingLeft: "10px",
                  textAlign: "left",
                }}
              >
                <div>
                  <h5>Jameson Wealth Holdings</h5>
                  <p>Estimated Performance</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h6 style={{ color: "green" }}>
                      <FaArrowUp />
                      22.51%
                    </h6>
                  </div>
                  <div
                    style={{
                      border: "1px solid #d9cbcb",
                      backgroundColor: "#d9cbcb",
                      borderRadius: "10px",
                      marginRight: "10px",
                      height: "65px",
                      width: "65px",
                      textAlign: "center",
                    }}
                  >
                    RISK
                    <h3>75</h3>
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingLeft: "10px",
                  textAlign: "left",
                }}
              >
                <div>
                  <h5>S&P 500</h5>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h6 style={{ color: "green" }}>
                      <FaArrowUp />
                      32.78%
                    </h6>
                  </div>
                  <div
                    style={{
                      border: "1px solid #d9cbcb",
                      backgroundColor: "#d9cbcb",
                      borderRadius: "10px",
                      marginRight: "10px",
                      height: "65px",
                      width: "65px",
                      textAlign: "center",
                    }}
                  >
                    RISK
                    <h3>75</h3>
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingLeft: "10px",
                  textAlign: "left",
                }}
              >
                <div>
                  <h5>Firm Like Yours</h5>
                  <p>Estimated Performance</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h6 style={{ color: "green" }}>
                      <FaArrowUp />
                      24.22%
                    </h6>
                  </div>
                  <div
                    style={{
                      border: "1px solid #d9cbcb",
                      backgroundColor: "#d9cbcb",
                      borderRadius: "10px",
                      marginRight: "10px",
                      height: "65px",
                      width: "65px",
                      textAlign: "center",
                    }}
                  >
                    RISK
                    <h3>75</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "31%",
              border: "1px solid #d9cbcb",
              textAlign: "left",
              margin: "10px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <div>
              <h5>
                If a <b>2013 Bull Market</b> happened again ...
              </h5>
              <p>Dec.31, 2012 - Dec.30, 2013</p>
            </div>

            <div style={{}} className="bottomFlex">
              <div
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingLeft: "10px",
                  textAlign: "left",
                }}
              >
                <div>
                  <h5>Jameson Wealth Holdings</h5>
                  <p>Estimated Performance</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h6 style={{ color: "green" }}>
                      <FaArrowUp />
                      22.51%
                    </h6>
                  </div>
                  <div
                    style={{
                      border: "1px solid #d9cbcb",
                      backgroundColor: "#d9cbcb",
                      borderRadius: "10px",
                      marginRight: "10px",
                      height: "65px",
                      width: "65px",
                      textAlign: "center",
                    }}
                  >
                    RISK
                    <h3>75</h3>
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingLeft: "10px",
                  textAlign: "left",
                }}
              >
                <div>
                  <h5>S&P 500</h5>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h6 style={{ color: "green" }}>
                      <FaArrowUp />
                      32.78%
                    </h6>
                  </div>
                  <div
                    style={{
                      border: "1px solid #d9cbcb",
                      backgroundColor: "#d9cbcb",
                      borderRadius: "10px",
                      marginRight: "10px",
                      height: "65px",
                      width: "65px",
                      textAlign: "center",
                    }}
                  >
                    RISK
                    <h3>75</h3>
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingLeft: "10px",
                  textAlign: "left",
                }}
              >
                <div>
                  <h5>Firm Like Yours</h5>
                  <p>Estimated Performance</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h6 style={{ color: "green" }}>
                      <FaArrowUp />
                      24.22%
                    </h6>
                  </div>
                  <div
                    style={{
                      border: "1px solid #d9cbcb",
                      backgroundColor: "#d9cbcb",
                      borderRadius: "10px",
                      marginRight: "10px",
                      height: "65px",
                      width: "65px",
                      textAlign: "center",
                    }}
                  >
                    RISK
                    <h3>75</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "31%",
              border: "1px solid #d9cbcb",
              textAlign: "left",
              margin: "10px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <div>
              <h5>
                If a <b>2013 Bull Market</b> happened again ...
              </h5>
              <p>Dec.31, 2012 - Dec.30, 2013</p>
            </div>

            <div style={{}} className="bottomFlex">
              <div
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingLeft: "10px",
                  textAlign: "left",
                }}
              >
                <div>
                  <h5>Jameson Wealth Holdings</h5>
                  <p>Estimated Performance</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h6 style={{ color: "green" }}>
                      <FaArrowUp />
                      22.51%
                    </h6>
                  </div>
                  <div
                    style={{
                      border: "1px solid #d9cbcb",
                      backgroundColor: "#d9cbcb",
                      borderRadius: "10px",
                      marginRight: "10px",
                      height: "65px",
                      width: "65px",
                      textAlign: "center",
                    }}
                  >
                    RISK
                    <h3>75</h3>
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingLeft: "10px",
                  textAlign: "left",
                }}
              >
                <div>
                  <h5>S&P 500</h5>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h6 style={{ color: "green" }}>
                      <FaArrowUp />
                      32.78%
                    </h6>
                  </div>
                  <div
                    style={{
                      border: "1px solid #d9cbcb",
                      backgroundColor: "#d9cbcb",
                      borderRadius: "10px",
                      marginRight: "10px",
                      height: "65px",
                      width: "65px",
                      textAlign: "center",
                    }}
                  >
                    RISK
                    <h3>75</h3>
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingLeft: "10px",
                  textAlign: "left",
                }}
              >
                <div>
                  <h5>Firm Like Yours</h5>
                  <p>Estimated Performance</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h6 style={{ color: "green" }}>
                      <FaArrowUp />
                      24.22%
                    </h6>
                  </div>
                  <div
                    style={{
                      border: "1px solid #d9cbcb",
                      backgroundColor: "#d9cbcb",
                      borderRadius: "10px",
                      marginRight: "10px",
                      height: "65px",
                      width: "65px",
                      textAlign: "center",
                    }}
                  >
                    RISK
                    <h3>75</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
