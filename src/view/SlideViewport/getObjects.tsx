import React from 'react';
import { SlideType } from '../../model/model';
import Text from './objects/Text';
import Circle from './objects/Circle';
import Rectangle from './objects/Rectangle';
import Triangle from './objects/Triangle';
import Img from './objects/Img';

export default function getObjects(
    slide: SlideType,
    kWidth: number,
    kHeight: number
) {
    return slide.objects.map((node) => {
        let style = {
            position: 'absolute',
            top: node.positionTopLeft.y / kWidth + 'px',
            left: node.positionTopLeft.x / kHeight + 'px',
        } as React.CSSProperties;

        if (node.type === 'text') {
            style = {
                ...style,
                fontSize: parseInt(node.fontSize) / kWidth + 'px',
                fontStyle: node.fontStyle,
                fontWeight: node.fontWeight,
            };
            return Text({ id: node.id, style: style, data: node.data });
        }

        if (node.type === 'figure' && node.figure === 'circle') {
            return Circle({
                id: node.id,
                style: style,
                width: node.width,
                height: node.height,
                kWidth: kWidth,
                kHeight: kHeight,
            });
        }

        if (node.type === 'figure' && node.figure === 'rectangle') {
            return Rectangle({
                id: node.id,
                style: style,
                width: node.width,
                height: node.height,
                kWidth: kWidth,
                kHeight: kHeight,
            });
        }
        if (node.type === 'figure' && node.figure === 'triangle') {
            return Triangle({
                id: node.id,
                style: style,
                width: node.width,
                height: node.height,
                kWidth: kWidth,
                kHeight: kHeight,
            });
        }
        if (node.type === 'img') {
            let styleForImg = {
                ...style,
                width: parseInt(node.width) / kWidth + 'px',
                height: parseInt(node.height) / kHeight + 'px',
            };
            return Img({ id: node.id, path: node.path, style: styleForImg });
        }
        throw new Error('Unexpected type');
    });
}
