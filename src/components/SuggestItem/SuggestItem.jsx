import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './SuggestItem.module.scss';

const cx = classNames.bind(styles);

function SuggestItem({ data }) {
    return (
        <Link to={`/search?q=${data}`} className={cx('suggest')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon')} />
            <span className={cx('content')}>{data}</span>
        </Link>
    );
}

export default SuggestItem;
