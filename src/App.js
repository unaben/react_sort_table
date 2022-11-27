import Table from "./components/Table";
import tableDataOne from "./tableDataOne.json";
import RenderTable from "./components/RenderTable";

const columns = [
  { label: "Full Name", accessor: "full_name", sortable: true },
  { label: "Email", accessor: "email", sortable: false },
  { label: "Gender", accessor: "gender", sortable: true, sortbyOrder: "desc" },
  { label: "Age", accessor: "age", sortable: true },
  { label: "Start date", accessor: "start_date", sortable: true },
];

const App = () => {
  return (
    <div className="table_container">
      <h1>Reusable sortable table with React</h1>
      <Table
        caption="Developers currently enrolled in this course. The table below is ordered (descending) by the Gender column."
        data={tableDataOne}
        columns={columns}
      />
      <br />
      <RenderTable />
      <br />
    </div>
  );
};

export default App;
