import React from 'react';
import './tabs.style.css';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../tabPanel/tabPanel.component';
import Typography from '@material-ui/core/Typography';

const SimpleTabs = (data) =>  
{
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { health,finance,entertainment,pop } = data.data;

  const tabStyle = {
    fontSize: 18,
    minWidth: 130,
    fontFamily:'微軟正黑體'
  };

  return (
    <div className="container">
      <div className="app-bar" position="static">
        <Typography className="title">生活報馬仔 +</Typography>
        <Tabs className="tabs" value={value} onChange={handleChange} variant='standard'>
          <Tab style={tabStyle} label="娛樂" />
          <Tab style={tabStyle} label="健康" />
          <Tab style={tabStyle} label="理財" />
          <Tab style={tabStyle} label="流行" />
        </Tabs>
      </div>
      {entertainment ? <TabPanel type="entertainment" value={value} index={0} items={entertainment.info} /> : null}
      {health ? <TabPanel type="health" value={value} index={1} items={health.info} /> : null}
      {finance ? <TabPanel type="finance" value={value} index={2} items={finance.info} /> : null}
      {pop ? <TabPanel type="pop" value={value} index={3} items={pop.info} /> : null}
    </div>
  );
}



export default SimpleTabs;