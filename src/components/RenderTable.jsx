import Table from "./Table";
import tableDataTwo from "../tableDataTwo.json";

const columns = [
  { label: "Name", accessor: "name", sortable: true },
  { label: "Country", accessor: "country", sortable: true },
  { label: "GitHub username", accessor: "github_username", sortable: true },
  { label: "Course price", accessor: "money", sortable: true },
];

const RenderTable = () => {
  return (
    <>
      <Table
        caption="List of developers with an affordable course (has no default sorting)."
        data={tableDataTwo}
        columns={columns}
      />
    </>
  );
};

export default RenderTable;
