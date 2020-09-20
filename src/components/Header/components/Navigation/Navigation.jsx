import React from 'react';
import styled from 'styled-components';
import NavigationLink from '../NavigationLink';

const Layout = styled.div`
  display: flex;
`;

const Divider = styled.div`
  width: 1px;
  border-right: 1px solid #dadada;
`;

const Logo = styled.span`
  color: #008fb4;
`;

const Navigation = () => (
  <Layout>
    <NavigationLink.Naked href="/">
      <Logo>LOGO</Logo>
    </NavigationLink.Naked>
    <Divider />
    <NavigationLink.Button variant="primary" href="/post-a-task">
      Post a task
    </NavigationLink.Button>
    <NavigationLink.Text href="/categories">
      Categories
    </NavigationLink.Text>
    <NavigationLink.Text href="/browse-tasks">
      Browse tasks
    </NavigationLink.Text>
    <NavigationLink.Text href="/how-it-works">
      How it works
    </NavigationLink.Text>
  </Layout>
);

export default Navigation;
