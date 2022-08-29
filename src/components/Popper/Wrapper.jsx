import React from 'react';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ scrollable, children, className }) {
    const classes = cx('wrapper', {
        [className]: className,
        scrollable,
    });
    return <div className={classes}>{children}</div>;
}

export default Wrapper;
