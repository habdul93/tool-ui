import React from 'react';
import { connect } from 'react-redux';
import Tree from 'react-tree-graph';
import 'react-tree-graph/dist/style.css';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
const COLORS = ['#0088FE', '#FFBB28', '#00C49F', '#FF8042'];
const piedata = [{name: 'Failure Mode Effect', value: 250}, {name: 'Failure Mode', value: 30},
    {name: 'Failure Cause', value: 300}, {name: 'Detection', value: 200}];

// import Sunburst from 'react-sunburst-d3-v4';
// import datasun from './data';


class Visualize extends React.Component {


    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
        this.state = {
            selectednode:""
        }

    }

    onClick(nodename){
      this.setState({selectednode:nodename})
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
                    onClick: this.onClick
                }}
                />
                <h2>{this.state.selectednode}</h2>
                {this.state.selectednode &&
            <PieChart width={300} height={200} >
                 <Pie
                     data={piedata}
                         cx={150}
                         cy={110}
                          innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                       paddingAngle={5}
                       label
                         >
                         {
                        piedata.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
                           }
                          </Pie>
                          <Tooltip />
             </PieChart>
                }
            </div>
        )
    }
};


const mapStateToProps = (state, props) => { // eslint-disable-line no-unused-vars
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Visualize);
