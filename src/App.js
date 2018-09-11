import React, {Component, Fragment} from 'react';
import {Row, Col, Button} from '../libs';

class App extends Component {
    render() {
        return (
            <Fragment>
                <div style={{width: '300px'}}>
                    <Button {...{
                        color: 'danger',
                        // gradient: {
                        //     from: 'brand',
                        //     to: 'danger'
                        // },
                        value: '删除',
                        disabled: true,
                        isAir: true,
                        iconName: 'sh-icon-warning'
                    }}/>
                </div>

            </Fragment>
        );
    }
}

export default App;
