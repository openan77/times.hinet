import PropTypes from 'prop-types';
import SimpleList from '../list-item/list-item.component';

const TabPanel = (props) => {
    const { children, type, value, index, items, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <div>
              {items
              .filter( (item,idx)=> idx<5 )
              .map( (item,idx) => <SimpleList key={idx} title={item.title} author={item.Author} url={item.sourceUrl} />)}
          </div>
        )}
      </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default TabPanel;