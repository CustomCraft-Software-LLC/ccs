import React, { useState } from 'react';
import './Table.css';
import Search from '../Search/Search.tsx';

interface TableProps {
  headers: string[];
  data: (string | number)[][];
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [filteredData, setFilteredData] = useState(data); // State for filtered data

  // Function to handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter the table data based on the search query
    const filtered = data.filter((row) =>
      row.some((cell) => cell.toString().toLowerCase().includes(query))
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      {/* Search Component */}
      <Search
        data={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search table data..."
      />

      {/* Table Component */}
      <table className="table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;