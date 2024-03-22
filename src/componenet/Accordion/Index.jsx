import React, { useState } from 'react';
import { Collapse } from 'antd';
import style from  './style.module.css'

const Accordion = ({ items }) => {
    const { Panel } = Collapse;

    const onChange = (key) => {
        console.log(key);
    };
    return <div className={style.accordion}>
        <Collapse  bordered={false} className={style.collapse}  items={items} accordion  onChange={onChange} />
    </div>
};



export default Accordion;
