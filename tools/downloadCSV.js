export const downloadCSV = (csvData, name = "export") => {
  const csv = csvData.join("\n");
  const csvUrl = "data:text/csv;charset=utf-8," + csv;
  const filename = `${name.trim()}.csv`;
  const link = document.createElement("a");
  link.setAttribute("href", csvUrl);
  link.setAttribute("download", filename);
  link.click();
};
