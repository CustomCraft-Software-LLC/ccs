import React from 'react';
import Table from './Table.tsx';
import TableCol from '../TableCol/TableCol.tsx';
import TableRow from '../TableRow/TableRow.tsx';
import TableHead from '../TableHead/TableHead.tsx';

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
      <TableHead cols={['t', 'a', 'b', 'l']}>t</TableHead>
      {table}
    </Table>
  );
}