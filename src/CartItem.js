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
    maxWidth: 1000,
    display: 'flex',
    marginTop: '20px',
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
            <Typography component="p">
              건강한 소에서 얻은 우유를 저온 살균한 깔끔하고 진한 고소함
            </Typography>
          </CardContent>
        </CardActionArea>

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
            <Typography component="p">
              ㈜강원심층수는 오염 물질로부터 완벽하게 차단된 철저한 방진
            </Typography>
          </CardContent>
        </CardActionArea>

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
            <Typography component="p">
              콜드브루의 풍성한 바디감을 은은한 달콤함으로
            </Typography>
          </CardContent>
        </CardActionArea>

      </Card>

     
    </Fragment>
    
  );
  }
}

CartItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CartItem);
