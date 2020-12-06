import React from 'react';
import useDragResize from './useDragResize';
import textStyles from './Text.module.css';
import objStyles from './Object.module.css';
import useChangeText from './useChangeText';
import { TextObject } from '../../../model/model';

interface TextProps {
    node: TextObject;
    style: React.CSSProperties;
    kWidth: number;
    kHeight: number;
    choosed: boolean;
    onclick: (e: React.MouseEvent<HTMLElement>) => void;
}

export default function Text(props: TextProps) {
    const div = React.useRef<HTMLDivElement>(null);
    const resizeIconRef = React.useRef<SVGSVGElement>(null);

    const refs = useDragResize({
        obj: div,
        resizeIcon: resizeIconRef,
        x: props.node.positionTopLeft.x,
        y: props.node.positionTopLeft.y,
        kWidth: props.kWidth,
        kHeight: props.kHeight,
        id: props.node.id,
        choosed: props.choosed,
        width: props.node.width,
        height: props.node.height,
        squareResize: false,
    });

    const size = refs.sizeRef;

    const el = React.useRef<HTMLInputElement>(null);
    useChangeText({id: props.node.id, data: props.node.data, el: el});

    const width = parseInt(size.current.width) / props.kWidth + 'px';
    const height = parseInt(size.current.width) / props.kHeight + 'px';

    return (
        <div ref={div} className={objStyles.objectBlock} style={{width: width, height: height}}>
            <svg
                ref={resizeIconRef}
                className={objStyles.resizeIcon}
                width={11}
                height={11}
                style={
                    props.choosed ? { display: 'block' } : { display: 'none' }
                }
            >
                <circle
                    cx={5.5}
                    cy={5.5}
                    stroke="#878787"
                    r={5}
                    fill="#878787"
                ></circle>
            </svg>
            <input ref={el} className={textStyles.input} key={props.node.id} style={props.style} onClick={(e: React.MouseEvent<HTMLElement>) => {
            props.onclick(e);
        }} />
        </div>
    );
}
