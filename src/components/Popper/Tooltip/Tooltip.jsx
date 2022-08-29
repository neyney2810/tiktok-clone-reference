import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import React from 'react';
import { ArrowUp } from '~/components/Icons';
import Wrapper from '../Wrapper';

import styles from './Tooltip.module.scss';
import { config } from '@fortawesome/fontawesome-svg-core';

const cx = classNames.bind(styles);

function Tooltip({ children, items }) {
    const onHide = (instance) => {
        instance.popper.classList.add('faded');
        return true;
    };

    const renderResult = (attrs) => (
        <Wrapper className={cx('menu')} tabIndex="-1" {...attrs}>
            <div className={cx('arrow')} data-popper-arrow="">
                <ArrowUp />
            </div>
            {items.map((item, index) => (
                <div key={index} className={cx('item-wrapper', { separate: item.separate })}>
                    {item.icon}
                    {item.title}
                </div>
            ))}
        </Wrapper>
    );
    return (
        <Tippy interactive delay={[0, 700]} placement="bottom-end" arrow={true} render={renderResult} onHide={onHide}>
            {children}
        </Tippy>
    );
}

Tooltip.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Tooltip;
