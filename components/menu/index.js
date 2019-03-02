import React, { Component } from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { classname } from 'helpers/classname';

import './index.scss';

const b = classname('menu');

class Menu extends Component {
    render() {
        const items = ['trello', 'github', 'csv','form'];

        return (
          <div className={b()}>
            <ul className={b('wrap')}>
                {items.map(item => {
                    return (
                        <li key={item} className={b(`menu-item`)}>
                            <Link href={`/${item}-config`} passHref>
                              <Button className={b('imageBtn')}>
                                <img className={b(`image`)} src={`static/images/${item}.png`}/>
                              </Button>
                            </Link>
                        </li>
                    );
                })}
            </ul>
          </div>
        );
    }
}

export default Menu;
