import React from 'react';
import useDragResize from './useDragResize';
import styles from './Object.module.css';
import { AppType, ImgObject, NodeType } from '../../../model/model';
import { resizeNode, changeSelectedObject, moveItem } from '../../../actions/actionsCreators';
import { connect } from 'react-redux';

interface ImgProps {
    node: ImgObject;
    style: React.CSSProperties;
    kWidth: number;
    kHeight: number;
    choosed: boolean;
    onclick: (e: React.MouseEvent<HTMLElement>) => void;
    resizeNode: (width: string, height: string) => void;
    changeSelectedObject: (id: string, type: NodeType) => void;
    moveItem: (x: number, y: number) => void;
}

function Img(props: ImgProps) {
    const el = React.useRef<HTMLDivElement>(null);
    const resizeIconRef = React.useRef<SVGSVGElement>(null);

    const refs = useDragResize({
        obj: el,
        resizeIcon: resizeIconRef,
        x: props.node.positionTopLeft.x,
        y: props.node.positionTopLeft.y,
        kWidth: props.kWidth,
        kHeight: props.kHeight,
        id: props.node.id,
        choosed: props.choosed,
        width: props.node.width,
        height: props.node.height,
        squareResize: true,
        type: 'img',
        resizeNode: props.resizeNode,
        changeSelectedObject: props.changeSelectedObject,
        moveItem: props.moveItem
    });


    let style = props.style;
    if (props.kWidth !== 1) {
        style = {
            ...style,
            border: 0
        }
    }

    const size = refs.sizeRef;

    const width = parseInt(size.current.width) / props.kWidth + 'px';
    const height = parseInt(size.current.height) / props.kHeight + 'px';


    return (
        <div ref={el} className={styles.paddedObjectBlock} style={style}>
            <svg
                ref={resizeIconRef}
                className={styles.resizeIcon}
                width={11}
                height={11}
                style={
                    props.choosed ? { display: 'block' } : { display: 'none' }
                }
            >
                <circle
                    cx={5.5}
                    cy={5.5}
                    stroke="#000"
                    r={5}
                    fill="#000"
                ></circle>
            </svg>
            <img
                style={{width: width, height: height}}
                key={props.node.id}
                src={props.node.path}
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                    props.onclick(e);
                }}
                alt=''
            ></img>
        </div>
    );
}

interface ImgOwnProps {
    node: ImgObject;
    style: React.CSSProperties;
    kWidth: number;
    kHeight: number;
    choosed: boolean;
    onclick: (e: React.MouseEvent<HTMLElement>) => void;
}

const mapStateToProps = (state: AppType, ownProps: ImgOwnProps) => {
    return ownProps;
}

const mapDispatchToProps = {
    resizeNode,
    changeSelectedObject,
    moveItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Img);
