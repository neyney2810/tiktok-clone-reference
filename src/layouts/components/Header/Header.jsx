import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import images from '~/assets/image';
import Center from './Center';
import Right from './Right';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const [currentUser, setCurrentUser] = useState(true);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link className={cx('logo')} to="/">
                    <img src={images.logo.default} alt="Logo" />
                </Link>

                <Center />

                <Right currentUser={currentUser} />
            </div>
        </header>
    );
}

export default Header;
