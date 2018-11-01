import React, { Component } from "react";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  line: {
    marginTop: '20px'
  },
  price: {
    textAlign: 'right',
    paddingRight: '100px',
  }
});

class CartTotal extends Component {
// 정확히 어떤 경우에 쓰고 어떤 경우에 안쓰는지 모르겠지만, 클래스 컴포넌트를 새로 생성하는 경우에 일단 쓴다. 그러나 안써도 렌더링된다. 왜인가??
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const total = this.props.total;
    const { classes } = this.props;
    return (
      <div>
        <Divider className={classes.line}/>
        <List component="nav">
          <ListItem>
            <ListItemText primary="Total" />
            <ListItemText primary="000" className={classes.price}/>
          </ListItem>
        </List>
      </div>
    )
  }
}

// CartTotal.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(CartTotal);