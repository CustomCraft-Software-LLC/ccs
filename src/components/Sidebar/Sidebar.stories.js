import React from 'react';
import { action } from '@storybook/addon-actions';
import Sidebar from './Sidebar'; 
import SidebarItem from '../SidebarItem/SidebarItem';
import Row from '../Row/Row';
import Col from '../Col/Col';
import Container from '../Container/Container';
import Box from '../Box/Box';

export default {
  title: 'Components/Sidebar', 
  component: Sidebar,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => {
  return (   
    <Container>
      <Row>
        <Col>
          <Sidebar>
            <SidebarItem>1</SidebarItem>
            <SidebarItem>2</SidebarItem>
            <SidebarItem>3</SidebarItem>
            <SidebarItem>4</SidebarItem>
          </Sidebar>
        </Col>
        <Col>
          <Box bgColor="#004400">hello</Box>
        </Col>
      </Row>
    </Container>
  );
}