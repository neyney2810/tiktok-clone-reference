import React from 'react';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleXmark, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Center.module.scss';
import { AccountItem } from '~/components/AccountItem';
import { SuggestItem } from '~/components/SuggestItem';

const cx = classNames.bind(styles);

function Center() {
    const [searchResult, setSearchResult] = useState([]);
    const [suggestResult, setSuggestResult] = useState([]);

    return (
        <div className={cx('center-container')}>
            <Tippy
                visible={searchResult.length > 0 || suggestResult.length > 0}
                interactive
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper scrollable>
                            {suggestResult.map((suggest) => (
                                <SuggestItem key={suggest.id} data={suggest} />
                            ))}
                            <h4 className={cx('search-tittle')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
            >
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
            </Tippy>
        </div>
    );
}

export default Center;
