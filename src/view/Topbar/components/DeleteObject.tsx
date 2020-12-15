import React from 'react';
import { AppType } from '../../../model/model';
import icon from '../img/delete.svg';
import { dispatch } from '../../../dispatcher';
import { deleteSlideObject } from '../../../methods/methods';

interface DeleteObjectProps {
    app: AppType;
}

export default function DeleteObject(props: DeleteObjectProps) {
    const iconStyle = {
        width: '30px',
        height: '30px'
    }
    const btnStyle = {
        backgroundColor: 'transparent',
        border: 0,
        cursor: 'pointer',
        marginLeft: '30px'
    }
    return (
        <button style={btnStyle} onClick={() => {
            dispatch(deleteSlideObject);
        }}><img src={icon} alt="delete icon" style={iconStyle} /></button>
    )
}