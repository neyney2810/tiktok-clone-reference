import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '~/components/Button';
import {
    BorderedAIcon,
    CircleQuestion,
    InboxIcon,
    MessageIcon,
    SettingGear,
    StoreIcon,
    TikTokIcon,
    UserIcon,
} from '~/components/Icons';
import CircleKeyboard from '~/components/Icons/CircleKeyboard';
import Logout from '~/components/Icons/Logout';
import { Image } from '~/components/Image';
import { Tooltip } from '~/components/Popper';

import styles from './Right.module.scss';

const cx = classNames.bind(styles);
function Right({ currentUser }) {
    const defaultTooltip = [
        {
            icon: <BorderedAIcon />,
            title: 'English',
        },
        {
            icon: <CircleQuestion />,
            title: <Link to="/feedback">Feedback and help</Link>,
        },
        {
            icon: <CircleKeyboard />,
            title: 'Keyboard shortcuts',
        },
    ];

    const loginTooltip = [
        {
            icon: <UserIcon />,
            title: 'View profile',
        },
        {
            icon: <TikTokIcon />,
            title: 'Get coins',
        },
        {
            icon: <StoreIcon />,
            title: 'Business Suite',
        },
        {
            icon: <SettingGear />,
            title: 'Settings',
        },
        {
            icon: <BorderedAIcon />,
            title: 'English',
        },
        {
            icon: <CircleQuestion />,
            title: <Link to="/feedback">Feedback and help</Link>,
        },
        {
            icon: <CircleKeyboard />,
            title: 'Keyboard shortcuts',
        },
        {
            icon: <Logout />,
            title: 'Log out',
            separate: true,
        },
    ];
    return (
        <div className={cx('right-container')}>
            <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} className={cx('upload-btn')}>
                Upload
            </Button>

            {currentUser ? (
                <>
                    <Tippy delay={[0, 50]} content="Messages" placement="bottom">
                        <button className={cx('action-btn')}>
                            <MessageIcon className={cx('message-icon')} />
                        </button>
                    </Tippy>
                    <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                        <button className={cx('action-btn')}>
                            <InboxIcon className={cx('inbox-icon')} />
                        </button>
                    </Tippy>
                </>
            ) : (
                <Button primary className={cx('login-btn')}>
                    Log in
                </Button>
            )}

            {currentUser ? (
                <>
                    <Tooltip items={loginTooltip}>
                        <Image
                            className={cx('user-avatar')}
                            src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                            alt="Nguyen Van A"
                        />
                    </Tooltip>
                </>
            ) : (
                <Tooltip items={defaultTooltip}>
                    <div className={cx('menu-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </div>
                </Tooltip>
            )}
        </div>
    );
}

export default Right;
