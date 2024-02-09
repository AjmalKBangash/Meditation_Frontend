import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const dataaa = [
  {
    name: "JAN",
    APPOINTMENTS: 4000,
    // pv: 2400,
    // amt: 2400,
  },
  {
    name: "FEB",
    APPOINTMENTS: 3000,
    // pv: 1398,
    // amt: 2210,
  },
  {
    name: "MAR",
    APPOINTMENTS: 2000,
    // pv: 9800,
    // amt: 2290,
  },
  {
    name: "APR",
    APPOINTMENTS: 2423,
    // pv: 3908,
    // amt: 2000,
  },
  {
    name: "MAY",
    APPOINTMENTS: 1890,
    // pv: 4800,
    // amt: 2181,
  },
  {
    name: "JUN",
    APPOINTMENTS: 2390,
    // pv: 3800,
    // amt: 2500,
  },
  {
    name: "JUL",
    APPOINTMENTS: 3490,
    // pv: 4300,
    // amt: 2100,
  },
  {
    name: "AUG",
    APPOINTMENTS: 3245,
    // pv: 9800,
    // amt: 2290,
  },
  {
    name: "SEP",
    APPOINTMENTS: 2647,
    // pv: 3908,
    // amt: 2000,
  },
  {
    name: "OCT",
    APPOINTMENTS: 3214,
    // pv: 3800,
    // amt: 2500,
  },
  {
    name: "NOV",
    APPOINTMENTS: 2134,
    // pv: 4300,
    // amt: 2100,
  },
  {
    name: "DEC",
    APPOINTMENTS: 1175,
    // pv: 4800,
    // amt: 2181,
  },
];

function BarChartMeditation(props) {
  // let listtt = [];
  // if (props.data) {
  //   props.data.map((each_month_roza_no) => {
  //     if ("01" === each_month_roza_no.truncated_month.split("-")[1]) {
  //       listtt.push({
  //         name: "JAN",
  //         Fastings: each_month_roza_no.Roza_Per_Month,
  //       });
  //     } else if ("02" === each_month_roza_no.truncated_month.split("-")[1]) {
  //       listtt.push({
  //         name: "FEB",
  //         Fastings: each_month_roza_no.Roza_Per_Month,
  //       });
  //     } else if ("03" === each_month_roza_no.truncated_month.split("-")[1]) {
  //       listtt.push({
  //         name: "MAR",
  //         Fastings: each_month_roza_no.Roza_Per_Month,
  //       });
  //     } else if ("04" === each_month_roza_no.truncated_month.split("-")[1]) {
  //       listtt.push({
  //         name: "APR",
  //         Fastings: each_month_roza_no.Roza_Per_Month,
  //       });
  //     } else if ("05" === each_month_roza_no.truncated_month.split("-")[1]) {
  //       listtt.push({
  //         name: "MAY",
  //         Fastings: each_month_roza_no.Roza_Per_Month,
  //       });
  //     } else if ("06" === each_month_roza_no.truncated_month.split("-")[1]) {
  //       listtt.push({
  //         name: "JUN",
  //         Fastings: each_month_roza_no.Roza_Per_Month,
  //       });
  //     } else if ("07" === each_month_roza_no.truncated_month.split("-")[1]) {
  //       listtt.push({
  //         name: "JUL",
  //         Fastings: each_month_roza_no.Roza_Per_Month,
  //       });
  //     } else if ("08" === each_month_roza_no.truncated_month.split("-")[1]) {
  //       listtt.push({
  //         name: "AUG",
  //         Tests: each_month_roza_no.Roza_Per_Month,
  //       });
  //     } else if ("09" === each_month_roza_no.truncated_month.split("-")[1]) {
  //       listtt.push({
  //         name: "SEP",
  //         Fastings: each_month_roza_no.Roza_Per_Month,
  //       });
  //     } else if ("10" === each_month_roza_no.truncated_month.split("-")[1]) {
  //       listtt.push({
  //         name: "OCT",
  //         Fastings: each_month_roza_no.Roza_Per_Month,
  //       });
  //     } else if ("11" === each_month_roza_no.truncated_month.split("-")[1]) {
  //       listtt.push({
  //         name: "NOV",
  //         Fastings: each_month_roza_no.Roza_Per_Month,
  //       });
  //     } else if ("12" === each_month_roza_no.truncated_month.split("-")[1]) {
  //       listtt.push({
  //         name: "DEC",
  //         Fastings: each_month_roza_no.Roza_Per_Month,
  //       });
  //     }
  //   });
  // }
  let listtt02 = [];
  if (props.data) {
    const monthMappings = {
      "01": "JAN",
      "02": "FEB",
      "03": "MAR",
      "04": "APR",
      "05": "MAY",
      "06": "JUN",
      "07": "JUL",
      "08": "AUG",
      "09": "SEP",
      10: "OCT",
      11: "NOV",
      12: "DEC",
    };

    props.data.forEach((each_month_roza_no) => {
      const month = each_month_roza_no.truncated_month.split("-")[1];
      const monthName = monthMappings[month];
      if (monthName) {
        listtt02.push({
          name: monthName,
          Fastings: each_month_roza_no.Roza_Per_Month,
        });
      }
    });
  }
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={350}
        // data={props.data}
        data={listtt02}
        // data={dataaa}
        margin={{
          top: 30,
          right: 30,
          left: 20,
          bottom: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Fastings" fill="#8884d8" barSize={30} />
        {/* <Bar dataKey="uv" fill="#82ca9d" />
        <Bar dataKey="amt" fill="#fe4200" /> */}
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartMeditation;
