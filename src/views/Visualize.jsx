import React from 'react';
import { connect } from 'react-redux';
import Tree from 'react-tree-graph';
import 'react-tree-graph/dist/style.css'


class Visualize extends React.Component {

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    render() {
        const { user, error,forcereset} = this.props; 
        let data = {
            name: 'Functions',
            children: [{
                name: 'FuncA',
                children: []
            }, {
                name: 'FuncB',
                children: [{
                    name: 'subfunction',
                    children: []
                }, {
                    name: 'subfunction',
                    children: []
                }, {
                    name: 'subfunction',
                    children: []
                }, {
                    name: 'subfunction',
                    children: []
                }]
            }, {
                name: 'FuncC',
                children: []
            }, {
                name: 'FuncD',
                children: [{
                    name: 'subfunction',
                    children: []
                }, {
                    name: 'subfunction',
                    children: []
                }]
            }, {
                name: 'FuncE',
                children: [{
                    name: 'subfunction',
                    children: []
                }, {
                    name: 'subfunction',
                    children: []
                }, {
                    name: 'subfunction',
                    children: [{
                        name: 'sub---function',
                        children: []
                    }, {
                        name: 'sub---function',
                        children: []
                    }, {
                        name: 'sub---function',
                        children: []
                    }]
                }]
            }, {
                name: 'FuncF',
                children: []
            }, {
                name: 'FuncG',
                children: [{
                    name: 'subfunction',
                    children: []
                }, {
                    name: 'subfunction',
                    children: []
                }, {
                    name: 'subfunction',
                    children: []
                }]
            }]
        };
            return (
            <div className="custom-container">
            <Tree
                data={data}
                height={400}
                width={400}
                svgProps={{
                    transform: 'rotate(90)',
                    className: 'custom'

                }}
                gProps={{
                    onClick: onClick
                }}
                />
            </div>
        )
    }
};

function onClick(nodeKey) {
	alert(nodeKey);
}

const mapStateToProps = (state, props) => { // eslint-disable-line no-unused-vars
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Visualize);
