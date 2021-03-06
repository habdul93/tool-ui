import React, { PureComponent } from "react";
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Divider from "@material-ui/core/Divider";
import NavigationIcon from "@material-ui/icons/Navigation";
// child componenets
import OutputExpansionRows from "./ExpansionRows";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

class FailureCauseGrid extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const noDataText = <h3 style={{ textAlign: "left" }}>No Failure Cause</h3>;
    const { classes, data } = this.props;
    return (
      <GridItem xs={12} sm={12} md={12} style={{ textAlign: "right" }}>
        <Button
          variant="extendedFab"
          aria-label="delete"
          color="primary"
          className={classes.button}
          onClick={this.props.toggleCauseModal}
        >
          <AddIcon
            className={classes.extendedIcon}
            onClick={this.props.toggleCauseModal}
          />
          Create Failure Cause
        </Button>
        {data.length ? (
          <Table
            tableHeaderColor="info"
            customRows={<OutputExpansionRows {...this.props} />}
          />
        ) : (
          noDataText
        )}
      </GridItem>
    );
  }
}

export default withStyles(styles)(FailureCauseGrid);
