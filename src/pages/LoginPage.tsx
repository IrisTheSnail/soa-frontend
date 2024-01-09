import React, { useState } from 'react';
import { Container, Grid, GridCol, Button, Input, Notification, Title, Flex } from '@mantine/core';
import {notifications} from '@mantine/notifications'
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    notifications.show({
      title: 'Login Successful',
      message: 'Welcome!',
    });
  };

  return (
    <Container size="sm">
      <Flex direction="column" gap={24} h="100vh" justify="center">
          <Title order={1}>Login</Title>
          <form>
            <Flex direction="column" gap={24}>
              <Input
                aria-label="Username"
                placeholder="Enter your username"
                value={username}
                onChange={(event) => setUsername(event.currentTarget.value)}
              />
              <Input
                aria-label="Password"
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.currentTarget.value)}
              />
              <Button type="button" onClick={handleLogin} style={{ marginTop: '16px' }}>
                Log In
              </Button>
            </Flex>
          </form>
        </Flex>
    </Container>
  );
};

export default LoginPage;
