import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VerifyCredentials from '../verifyCredentials/VerifyCredentials';
import { green } from '@material-ui/core/colors';
import { ContentAddCircle } from 'material-ui/svg-icons';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    }
});

export default function CardItem(props) {
    const imgPath = '/static/images/cards/';
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3}>
                {props.cardItems.map(cardItem => {
                    return (

                        <Grid item xs={4}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt={cardItem.title}
                                        height="140"
                                        image={imgPath.concat(cardItem.imgName)}
                                        title={cardItem.title}
                                    />
                                </CardActionArea>
                                <CardContent>
                                    <ExpansionPanel>
                                        <ExpansionPanelSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography className={classes.heading}>{cardItem.title}</Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Typography>
                                                <VerifyCredentials webSiteId={cardItem.id} userName={props.userName} />
                                            </Typography>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" href={cardItem.link}>
                                        Visit Login Page
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            
            </Grid>

        </div>
    );
}