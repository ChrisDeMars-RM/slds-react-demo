import React from 'react';
import { IconSettings, Tabs, TabsPanel } from '@salesforce/design-system-react';

class TabsSeparate extends React.Component {
  render() {
    return (
      <IconSettings iconPath='/icons'>
        <h2>Tabs</h2>
        <Tabs id='tabs-example-default'>
          <TabsPanel label='Item One'>Item One Content</TabsPanel>
          <TabsPanel label='Item Two'>Item Two Content</TabsPanel>
          <TabsPanel label='Item Three'>Item Three Content</TabsPanel>
          <TabsPanel disabled label='Disabled'>
            Disabled Content
          </TabsPanel>
        </Tabs>
      </IconSettings>
    );
  }
}

export default TabsSeparate;
