import React from 'react';
import icon from '../img/delete.svg';
import { deleteSlideObject } from '../../../actions/actionsCreators';
import { connect } from 'react-redux';

interface DeleteObjectProps {
    deleteSlideObject: () => void;
}

function DeleteObject(props: DeleteObjectProps) {
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
            props.deleteSlideObject();
        }}><img src={icon} alt="delete icon" style={iconStyle} /></button>
    )
}

const mapDispatchToProps = {
    deleteSlideObject
}

export default connect(null, mapDispatchToProps)(DeleteObject)