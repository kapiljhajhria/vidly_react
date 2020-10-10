import React from "react";
import _ from 'lodash'

export default class TableBody extends React.Component {
    render() {
        const {data, columns} = this.props;

        return (
            <tbody>
            {data.map(item => <tr>
                {
                    columns.map(col => <td>{_.get(item, col.path)}</td>)
                }
            </tr>)}
            </tbody>
        )
    }
}