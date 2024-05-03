import Search from '../Search/Search.tsx';
import { Meta } from '@storybook/react';
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
} as Meta;

export const Default = () => {
  const table: JSX.Element[] = [];

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
    <div>
      <Search />
      <Table>
        <TableHead cols={["t", "a", "b", "l"]}></TableHead>
        {table}
      </Table>
    </div>
  );
}