import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '../Image';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data1 }) {
    const data = {
        nickname: '_linhhkaa_',
        full_name: 'Linh Ka',
        verified_account: true,
        avatar: 'https://p16-sign-sg.tiktokcdn.com/tiktok-obj/1662473062930434~c5_300x300.webp?x-expires=1661608800&x-signature=I7FzI3%2FatMxbvRFfj7josId2KpU%3D',
    };

    return (
        <Link to={`/@${data.nickname}`} className={cx('account')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    {data.nickname}
                    {!data.verified_account || <FontAwesomeIcon icon={faCircleCheck} className={cx('check')} />}
                </h4>
                <span className={cx('username')}>{data.full_name}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
