import React, { useState } from 'react';
import { Container, Tabs, Button, Input, Grid, GridCol, Flex } from '@mantine/core';
import { MissionManager } from '../mission/components/MissionManager';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Container size="md" p="xl">
      <Tabs defaultValue={"Missions"} variant="outline">
        <Flex direction="column" gap={16}>
          
          <Tabs.List variant="outline">
            <Tabs.Tab value="Missions">Missions</Tabs.Tab>
            <Tabs.Tab value="Reimbursement">Reimbursement</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="Missions">
            <MissionManager />
          </Tabs.Panel>

          <Tabs.Panel value="Reimbursement">
            <MissionManager />
          </Tabs.Panel>

        </Flex>
      </Tabs>
    </Container>
  );
};

export default Dashboard;
