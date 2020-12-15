import React from 'react';
import plusZIcon from '../img/bringToFront.png';
import minusZIcon from '../img/sendToBack.png';
import ImgButton from '../components/ImgButton';
import { decreaseZIndex, increaseZIndex } from '../../../methods/methods';
import { dispatch } from '../../../dispatcher';

export default function ManageZIndex() {
    return (
        <>
            <ImgButton onClick={() => {
                dispatch(increaseZIndex);
            }} imgUrl={plusZIcon}/>
            <ImgButton onClick={() => {
                dispatch(decreaseZIndex);
            }} imgUrl={minusZIcon}/>
        </>
    )
}
