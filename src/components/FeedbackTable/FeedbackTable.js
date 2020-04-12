import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import axios from 'axios';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700
  },
  button: {
    margin: theme.spacing(),
  },
})

class FeedbackTable extends Component  {

    changeItem = (buttonType, id) => {
        console.log(buttonType, 'item with id', id);
        if(buttonType === 'edit'){
            //send back to the feelings page
            this.props.history.push('/feeling');
        }
        if(buttonType === 'delete'){
            axios.delete(`/feedback/${id}`).then( (response) => {
                this.fillAdminReducer();
            }).catch( (error) => {
                console.log('error in deleting feedback', error)
            });
        }
    }
    fillAdminReducer = () => {
        axios.get('/feedback').then( response => {
            this.props.dispatch({
                type: 'GET_ADMIN', payload: response.data
            })
        }).catch( error => {
            console.log('error getting feedback list', error)
        });
      }
    render() {
        const classes = this.props.classes;
        return (
            <>
            <h2>Feedback</h2>
                <Table className={classes.table}>
                        <TableHead>
                        <TableRow>
                            <TableCell>Feeling Rating</TableCell>
                            <TableCell align="right">Support Rating</TableCell>
                            <TableCell align="right">Understanding Rating</TableCell>
                            <TableCell align="right">Comments</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {this.props.list.map(item => (
                            <TableRow key={item.id}>
                            <TableCell component="th" scope="row">{item.feeling}</TableCell>
                            <TableCell align="right">{item.understanding}</TableCell>
                            <TableCell align="right">{item.support}</TableCell>
                            <TableCell align="right">{item.comments}</TableCell>
                            <TableCell align="right">
                                <Button            
                                    variant="contained"
                                    color="primary" 
                                    onClick={ () => this.changeItem(this.props.button, item.id)}>
                                        {this.props.button}
                                </Button>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
            </>
        );
    }
}
export default connect()(withRouter(withStyles(styles)(FeedbackTable)));
