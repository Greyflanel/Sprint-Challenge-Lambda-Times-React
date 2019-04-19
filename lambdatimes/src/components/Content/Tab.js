import React from 'react';
import PropTypes from 'prop-types'

const Tab = props => {
  let classes = " ";
  if (props.tab === props.selectedTab) {
    classes = "tab active-tab"
  } else {
    classes = "tab";
  }
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={'tab'}
      onClick={tab =>  props.selectTabHandler(props.selectedTab)
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
         
      }
    >
    
    {props.tabs.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string
}
export default Tab;
