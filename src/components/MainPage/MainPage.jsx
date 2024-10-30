import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import Table from '../Table/Table';

export default function MainPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onTabChange = (event) => {
    setActiveIndex(event.index);
  }

  return (
    <TabView activeIndex={activeIndex} onTabChange={onTabChange}>
        <TabPanel header="Projects">
            <Table />
        </TabPanel>
        <TabPanel header="Scripts">
            Content of Scripts
        </TabPanel>
        <TabPanel header="Filters">
            Content of Filters
        </TabPanel>
        <TabPanel header="Agent Tracker">
            Content of Agent Tracker
        </TabPanel>
        <TabPanel header="Data Files">
            Content of Data Files
        </TabPanel>
        <TabPanel header="Tools">
            Content of Tools
        </TabPanel>
        <TabPanel header="Admin">
            Content of Admin
        </TabPanel>
    </TabView>
  );
}


