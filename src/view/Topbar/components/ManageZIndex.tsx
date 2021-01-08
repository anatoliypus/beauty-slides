import React from 'react';
import plusZIcon from '../img/bringToFront.png';
import minusZIcon from '../img/sendToBack.png';
import ImgButton from '../components/ImgButton';
import { decreaseZIndex, increaseZIndex } from '../../../actions/actionsCreators';
import { connect } from 'react-redux';

interface ManageZIndexProps {
    decreaseZIndex: () => void;
    increaseZIndex: () => void;
}

function ManageZIndex(props: ManageZIndexProps) {
    return (
        <>
            <ImgButton onClick={() => {
                props.increaseZIndex();
            }} imgUrl={plusZIcon}/>
            <ImgButton onClick={() => {
                props.decreaseZIndex();
            }} imgUrl={minusZIcon}/>
        </>
    )
}

const mapDispatchToProps = {
    decreaseZIndex, 
    increaseZIndex
}

export default connect(null, mapDispatchToProps)(ManageZIndex)
