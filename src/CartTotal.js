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
// 스테이트를 새로 작성하는 경우에 사용??
  constructor(props) {
    super(props);

    this.state = {
      total: 0
    };
    //바인드를 꼭 해줘야 하는 경우는 언제인가??  
    this.calculateTotal = this.calculateTotal.bind(this);
  }


// 합계를 계산하는 함수
  calculateTotal(price) {
    this.setState({
      total: this.state.total + price
    });
  }

  render() {
    const total = this.props.total;
    const { classes } = this.props;
    return (
      <div>
        <Divider className={classes.line}/>
        <List component="nav">
          <ListItem>
            <ListItemText primary="Total" />
            <ListItemText primary={this.state.total} className={classes.price}/>
          </ListItem>
        </List>
      </div>
    )
  }
}

// 프롭타입을 지정해야만 하는가?
// CartTotal.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(CartTotal);