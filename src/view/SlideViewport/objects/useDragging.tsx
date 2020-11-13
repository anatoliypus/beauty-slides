import React from 'react';
import { dispatch } from '../../../dispatcher';
import { moveItem } from '../../../methods/methods';

export default function useDragging(el: any, x: number, y: number, kWidth: number, kHeight: number, id: string, choosed: boolean) {
    const [elementCords, _changeElementCords] = React.useState({
        x: x,
        y: y,
    });

    const myStateRef = React.useRef(elementCords);
    const changeElementCords = (data: any) => {
        myStateRef.current = data;
        _changeElementCords(data);
    };

    React.useEffect(() => {
        changeElementCords({x: x, y: y})
    }, [x, y]);

    let initialCursorX: number;
    let initialCursorY: number;

    React.useLayoutEffect(() => {
        if (el.current) {
            el.current.style.top = elementCords.y / kHeight + 'px';
            el.current.style.left = elementCords.x / kWidth + 'px';
        }
    });

    React.useEffect(() => {
        const elOnMouseMove = (e: MouseEvent) => {
            if (el.current)
                changeElementCords({
                    x: elementCords.x + e.pageX - initialCursorX,
                    y: elementCords.y + e.pageY - initialCursorY,
                });
        };
        const elOnMouseUp = (e: MouseEvent) => {
            dispatch(moveItem, {
                id: id,
                x: myStateRef.current.x,
                y: myStateRef.current.y,
            });
            window.removeEventListener('mousemove', elOnMouseMove);
        };
        const elOnMouseDown = (e: MouseEvent) => {
            if (el.current) {
                e.preventDefault();
                initialCursorX = e.pageX;
                initialCursorY = e.pageY;
                window.addEventListener('mouseup', elOnMouseUp, { once: true });
                window.addEventListener('mousemove', elOnMouseMove);
            }
        };
        if (el.current && choosed)
            el.current.addEventListener('mousedown', elOnMouseDown, {
                once: true,
            });
        return () => {
            if (el.current)
                el.current.removeEventListener('mousedown', elOnMouseDown);
        };
    });
}
