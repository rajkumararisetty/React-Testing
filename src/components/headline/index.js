import React, { PureComponent, Fragment } from 'react';
import './styles.scss';

class Headline extends PureComponent {
    // constructor(props) {
    //     super(props);
    // };

    render = () => {
        const { header, desc } = this.props;
        if (!header) {
            return null;
        }
        return(
            <Fragment>
                <h1 data-test="headlineHeader">{header}</h1>
                <p data-test="headlineDesc">{desc}</p>
            </Fragment>
        );
    };
}

export default Headline;
