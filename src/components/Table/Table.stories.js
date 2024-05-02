import React from 'react';
import Table from './Table.jsx';
import TableCol from '../TableCol/TableCol.jsx';
import TableRow from '../TableRow/TableRow.jsx';
import TableHead from '../TableHead/TableHead.jsx';

export default {
  title: 'Components/Table', 
  component: Table,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => {
  const table = [];

  for(let i = 0; i < 5; i++) {
    table.push(
      <TableRow key={i}>
        <TableCol>{i}</TableCol>
        <TableCol>{i + 1}</TableCol>
        <TableCol>{i + 2}</TableCol>
        <TableCol>{i + 3}</TableCol>
      </TableRow>
    )
  }

  return (   
    <Table>
      <TableRow>
        <TableHead>t</TableHead>
        <TableHead>a</TableHead>
        <TableHead>b</TableHead>
        <TableHead>l</TableHead>
      </TableRow>
      {table}
    </Table>
  );
}