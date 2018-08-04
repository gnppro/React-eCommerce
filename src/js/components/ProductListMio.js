import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
//import FavoriteIcon from '@material-ui/icons/Favorite';
//import ShareIcon from '@material-ui/icons/Share';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import MoreVertIcon from '@material-ui/icons/MoreVert';
import { connect } from 'react-redux';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});
// change code below this <line></line>
function mapStateToProps(state, props){
  return {data: state.data}
}

@connect(mapStateToProps)
class ProductList extends React.Component {
  state = { 
    expanded: false
   };
   
   handleSendData() {
    const action = sendData();
    // despachamos la acción al store
    this.props.dispatch(action);
  }
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                G
              </Avatar>
            }
            action={
              <IconButton>
                {/* <MoreVertIcon /> */}
              </IconButton>
            }
            title={this.props.name}
            subheader={this.props.price}
          />
          <CardMedia
            className={classes.media}
            src={this.props.img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
            {this.props.txt}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              {/* <FavoriteIcon /> */}
            </IconButton>
            <IconButton aria-label="Share">
              {/* <ShareIcon /> */}
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              {/* <ExpandMoreIcon /> */}
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Method:
              </Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                minutes.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}


// class Products extends Component {
//     render() {
//       const products = this.props.data.categories[0].products
//       console.log(this.props.data);
//       return (
//         <div className="Products">
//           {
//             products.map((item) => {
//               return <ProductList {...item} key={item.id} />
//             })
//           }
//         </div>
//       )
//     }
//   }

const stateLeonidasEsteban = [
    {
      "title": "¿Qué es responsive Design?",
      "subheader": "LeonidasEsteban",
      "avatar": "video",
      "cover": "./images/covers/responsive.jpg",
      "txt": "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
      "id": 1
    },
    {
      "title": "Cómo optimzar la carga de un website",
      "subheader": "LeonidasEsteban",
      "avatar": "video",
      "cover": "./images/covers/optimizar.jpg",
      "txt": "http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4",
      "id": 2
    },
];

export default withStyles(styles)(ProductList);