import React, { PureComponent, Fragment } from 'react';
import PropTyeps from 'prop-types';
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

Headline.propTypes = {
    header: PropTyeps.string,
    desc: PropTyeps.string,
    tempArray: PropTyeps.arrayOf(PropTyeps.shape({
        firstName: PropTyeps.string,
        lastName: PropTyeps.string,
        email: PropTyeps.string,
        age: PropTyeps.number,
        onlineStatus: PropTyeps.bool,
    }))
}

export default Headline;
