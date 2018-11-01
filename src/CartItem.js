import React, { Fragment } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  card: {
    width: '800px',
    maxWidth: '1000px',
    display: 'flex',
    marginTop: '20px',
    margin: '0 auto',
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    // objectFit: 'cover',
    
    width: 'auto',
    height: '96px',
    margin: '0 auto',
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  title: {
    paddingRight: '20px'
  },
  price: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    marginRight: '20px',
    marginLeft: '20px',
  }
});

class CartItem extends React.Component {
  state = {
    checkedA: true,
    checkedB: true,
    checkedC: true,
  };

  // 이중화살표는 무엇인가????
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };


  render() {
    // props는 어디에 있는 것인가???
  const { classes } = this.props;

  return (
    <Fragment>
      <Card className={classes.card}>
        <CardActions>
          <Checkbox
          checked={this.state.checkedA}
          onChange={this.handleChange('checkedA')}
          value="checkedA"
          />
          <Button size="small" color="primary">
            X 삭제
          </Button>
        </CardActions>

        <CardMedia
            component="img"
            alt="Contemplative Reptile"
            className={classes.media}
            height="140"
            image={"http://www.hellonature.net/shop/data/goods/img/15589/n_st_1456989914841l0.jpg"}
            title="Contemplative Reptile"
        />

        <CardActionArea>
          <CardContent className={classes.text}>
            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
              Milk <br />
            </Typography>
          </CardContent>
        </CardActionArea>
        <Typography component="h3" className={classes.price} align="center">
          {this.props.price} 
        </Typography>
      </Card>

      <Card className={classes.card}>
        <CardActions>
          <Checkbox
          checked={this.state.checkedB}
          onChange={this.handleChange('checkedB')}
          value="checkedB"
          />
          <Button size="small" color="primary">
            X 삭제
          </Button>
        </CardActions>

        <CardMedia
            component="img"
            alt="Contemplative Reptile"
            className={classes.media}
            height="140"
            image={"http://www.hellonature.net/shop/data/goods/img/14078/n_st_1529319718803l0.jpg"}
            title="Contemplative Reptile"
        />

        <CardActionArea>
          <CardContent className={classes.text}>
            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
              Water <br />
            </Typography>
          </CardContent>
        </CardActionArea>
        <Typography component="h3" className={classes.price} align="center">
          800  
        </Typography>
      </Card>

      <Card className={classes.card}>
        <CardActions>
          <Checkbox
          checked={this.state.checkedC}
          onChange={this.handleChange('checkedC')}
          value="checkedC"
          />
          <Button size="small" color="primary">
            X 삭제
          </Button>
        </CardActions>

        <CardMedia
            component="img"
            alt="Contemplative Reptile"
            className={classes.media}
            height="140"
            image={"http://www.hellonature.net/shop/data/goods/img/18544/n_st_1501118581992l0.jpg"}
            title="Contemplative Reptile"
        />

        <CardActionArea>
          <CardContent className={classes.text}>
            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
              Coffee <br />
            </Typography>
          </CardContent>
        </CardActionArea>
        <Typography component="h3" className={classes.price} align="center">
          1000  
        </Typography>
      </Card>

     
    </Fragment>
    
  );
  }
}

CartItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CartItem);
