import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/image';
import Center from './Center';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <a className={cx('logo')} href="/">
                    <img src={images.logo.default} alt="Logo" />
                </a>

                <Center />

                <div className={cx('right-container')}>
                    <div className={cx('upload-container')}></div>
                    <div className={cx('message-icon-container')}></div>
                    <div className={cx('message-inbox-container')}></div>
                    <div className={cx('profile-container')}>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
