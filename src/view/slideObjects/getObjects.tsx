import React from 'react';
import { NodeType, SlideType } from '../../model/model';
import Text from './objects/Text';
import Circle from './objects/Circle';
import Rectangle from './objects/Rectangle';
import Triangle from './objects/Triangle';
import Img from './objects/Img';
import Line from './objects/Line';


export default function getObjects(
    slide: SlideType,
    kWidth: number,
    kHeight: number,
    selectedId: string | null,
    changeSelectedObject: (id: string, type: NodeType) => void
) {
    return slide.objects.map((node, index) => {
        const elOnClick = (
            e: React.MouseEvent<HTMLElement | SVGSVGElement>
        ) => {
            e.preventDefault();
            if (kWidth === 1 && kHeight === 1) {
                changeSelectedObject(node.id, node.type)
            }
        };
        let style = {
            position: 'absolute',
            top: node.positionTopLeft.y / kHeight + 'px',
            left: node.positionTopLeft.x / kWidth + 'px',
            border: '3px solid transparent',
            zIndex: node.zIndex
        } as React.CSSProperties;
        if (selectedId && node.id === selectedId) {
            style.border = '3px dashed grey';
            style.cursor = 'move';
        }

        if (node.type === 'text') {
            style = {
                ...style,
                top: 'unset',
                left: 'unset',
                position: 'relative',
                fontSize: parseInt(node.fontSize) / kHeight + 'px',
                fontStyle: node.fontStyle,
                fontWeight: node.fontWeight,
                textDecoration: node.fontDecoration,
                color: node.color,
                fontFamily: node.fontFamily
            };
            switch (node.alignment) {
                case 'left': 
                    style.textAlign = 'left';
                    break;
                case 'center':
                    style.textAlign = 'center';
                    break;
                case 'right':
                    style.textAlign = 'right';
                    break
            }
            return (
                <Text
                    key={index}
                    node={node}
                    style={style}
                    kWidth={kWidth}
                    kHeight={kHeight}
                    choosed={node.id === selectedId}
                    onclick={elOnClick}
                />
            );
        }

        if (node.type === 'figure' && node.figure === 'circle') {
            return (
                <Circle
                    node={node}
                    style={style}
                    kWidth={kWidth}
                    kHeight={kHeight}
                    onclick={elOnClick}
                    choosed={node.id === selectedId}
                    key={index}
                />
            );
        }

        if (node.type === 'figure' && node.figure === 'rectangle') {
            return (
                <Rectangle
                    node={node}
                    style={style}
                    kWidth={kWidth}
                    kHeight={kHeight}
                    onclick={elOnClick}
                    choosed={node.id === selectedId}
                    key={index}
                />
            );
        }
        if (node.type === 'figure' && node.figure === 'triangle') {
            return (
                <Triangle
                    node={node}
                    style={style}
                    kWidth={kWidth}
                    kHeight={kHeight}
                    onclick={elOnClick}
                    choosed={node.id === selectedId}
                    key={index}
                />
            );
        }
        if (node.type === 'figure' && node.figure === 'line') {
            return (
                <Line
                    node={node}
                    style={style}
                    kWidth={kWidth}
                    kHeight={kHeight}
                    onclick={elOnClick}
                    choosed={node.id === selectedId}
                    key={index}
                />
            );
        }
        if (node.type === 'img') {
            style = {
                ...style,
                top: 'unset',
                left: 'unset',
                position: 'unset',
                width: '100%',
                height: '100%',
            };
            return (
                <Img
                    key={index}
                    node={node}
                    kWidth={kWidth}
                    kHeight={kHeight}
                    choosed={node.id === selectedId}
                    style={style}
                    onclick={elOnClick}
                />
            );
        }
        throw new Error('Unexpected type');
    });
}
