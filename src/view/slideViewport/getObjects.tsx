import React from 'react';
import { SlideType } from '../../model/model';

export default function getObjects(slide: SlideType, kWidth: number, kHeight: number) {
    return slide.objects.map((node) => {
        let style = {
            position: 'absolute',
            top: (node.positionTopLeft.y) / kWidth + 'px',
            left: (node.positionTopLeft.x) / kHeight + 'px',
        } as React.CSSProperties;

        if (node.type === 'text') {
            style = {
                ...style,
                fontSize: parseInt(node.fontSize) / kWidth + 'px',
                fontStyle: node.fontStyle,
                fontWeight: node.fontWeight
            }
            return (
                <p
                    key={node.id}
                    className="text-node"
                    style={style}
                >
                    {node.data}
                </p>
            );
        }

        if (node.type === 'figure' && node.figure === 'circle') {
            return (
                <svg
                    style={style}
                    key={node.id}
                    width={(parseInt(node.width) + 5) / kWidth}
                    height={(parseInt(node.height) + 5) / kHeight}
                >
                    <circle
                        cx={(parseInt(node.width) + 2.5) / (2 * kWidth)}
                        cy={(parseInt(node.height) + 2.5) / (2 * kHeight)}
                        stroke="black"
                        r={parseInt(node.width) / (2 * kWidth)}
                        fill="transparent"
                    ></circle>
                </svg>
            );
        }

        if (node.type === 'figure' && node.figure === 'rectangle') {
            return (
                <svg
                    style={style}
                    key={node.id}
                    width={(parseInt(node.width) + 5) / kWidth}
                    height={(parseInt(node.height) + 5) / kHeight}
                >
                    <rect
                        x="1"
                        y="1"
                        width={parseInt(node.width) / kWidth}
                        height={parseInt(node.height) / kHeight}
                        stroke="black"
                        fill="transparent"
                    ></rect>
                </svg>
            );
        }
        if (node.type === 'figure' && node.figure === 'triangle') {
            return (
                <svg
                    style={style}
                    key={node.id}
                    width={(parseInt(node.width) + 5) / kWidth}
                    height={(parseInt(node.height) + 5) / kHeight}
                >
                    <polygon
                        points={parseInt(node.width) / (2 * kWidth) + ',0 0,' + parseInt(node.height) / kHeight + ' ' + parseInt(node.width) / kWidth + ',' + parseInt(node.height) / kHeight}
                        width={parseInt(node.width) / kWidth}
                        height={parseInt(node.height) / kHeight}
                        stroke="black"
                        fill="transparent"
                    ></polygon>
                </svg>
            );
        }
        if (node.type === 'img') {
            let styleForImg = {
                ...style,
                width: parseInt(node.width) / kWidth + 'px',
                height: parseInt(node.height) / kHeight + 'px'
            }
            return (
                <img style={styleForImg} key={node.id} src={node.path}></img>
            );
        }
        throw new Error('Unexpected type');
    })
}