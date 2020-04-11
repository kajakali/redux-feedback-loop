import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700
  }
})

class FeedbackTable extends Component  {

    changeItem = (buttonType, id) => {
        console.log(buttonType, 'item with id', id);
        //TODO actually make the edit and delete buttons work
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
                                <button onClick={ () => this.changeItem(this.props.button, item.id)}>{this.props.button}</button>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
            </>
        );
    }
}
export default withStyles(styles)(FeedbackTable);
