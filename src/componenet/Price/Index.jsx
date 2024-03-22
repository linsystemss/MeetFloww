import React from 'react';
import style from './style.module.css';
import { PLANS } from '../../constants/price';
import { Switch } from 'antd';


const Price = () => {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };

    const handelClick = () => {
        console.log("aaaa")
    }

    return (
        <div className={style.priceBlock}>
            <div className={style.priceTable}>
                    <div className={style.priceItemBlock}>
                        {PLANS.map((plan, index) => (
                            <div className={style.TitleItem} key={index}>
                                <div className={style.header}>
                                    <div>
                                        <p>{plan.name}</p>
                                        <div>{plan.checkBox ? <>
                                            <Switch defaultChecked onChange={onChange} />
                                            <span>{plan.anotherName}
                                            </span>

                                          </>: ''}
                                        </div>
                                    </div>
                                    <p style={{fontSize:'23px', paddingTop:'5px'}}>{plan.price}
                                        <small style={{fontSize:'13px'}}>{plan.month}</small>
                                    </p>
                                </div>
                                <ul>
                                    {plan.features.map((feature, i) => (
                                        <li key={i}>{feature === 'done' ?
                                            <svg  width="12" height="9"
                                                  xmlns="http://www.w3.org/2000/svg">…
                                              <path d="M10.28.28 3.989 6.575
                                            1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1
                                            1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" fill="#40A9FF" fillRule="nonzero"></path>
                                        </svg> : feature
                                         }
                                        </li>
                                    ))}
                                    <div onClick={handelClick} className={style.button}>
                                       {plan.button}
                                    </div>
                                </ul>
                            </div>
                        ))}
                    </div>
            </div>
        </div>
    );
};

export default Price;
