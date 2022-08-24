import classNames from 'classnames/bind';
import React from 'react';
import DiscoverContainer from './DiscoverContainer';
import FooterContainer from './FooterContainer';
import MainNavContainer from './MainNavContainer';
import PlaceHolder from './Placeholder';
import styles from './SideBar.module.scss';
import UserContainer from './UserContainer';

const cx = classNames.bind(styles);
function SideBar() {
    return (
        <aside className={cx('relative')}>
            <div className={cx('scroll-container')}>
                <div className={cx('wrapper')}>
                    <MainNavContainer />
                    <UserContainer />
                    <DiscoverContainer />
                    <PlaceHolder />
                    <FooterContainer />
                </div>
            </div>
        </aside>
    );
}

export default SideBar;
