import React from 'react';
import classNames from 'classnames/bind';
import styles from './Center.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleXmark, faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Center() {
    return (
        <div className={cx('center-container')}>
            <form className={cx('search-input')} action="/search" formNoValidate>
                <input type="text" placeholder="Search account and videos" spellCheck={false} />
                <button className={cx('clear-btn')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>

                {/* Loading */}
                <button className={cx('loading-btn')}>
                    <FontAwesomeIcon icon={faCircleNotch} />
                </button>

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>

            <div></div>
        </div>
    );
}

export default Center;
