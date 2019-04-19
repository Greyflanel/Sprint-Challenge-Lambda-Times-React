import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
    {props.tabs.map((tabS, index) =>(
      <Tab key={index} tabS={tabS} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} />
      
    ))}
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
// Tabs.propTypes = {
//   selectTabHandler: PropTypes.function,
//   selectedTab: PropTypes.string,
//   tab: PropTypes.object
// }

export default Tabs;
