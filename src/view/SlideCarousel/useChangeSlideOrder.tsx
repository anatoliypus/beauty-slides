import React from 'react';
import { changeSlideOrder } from '../../methods/methods';
import { dispatch } from '../../dispatcher';

interface useChangeSlideOrderProps {
    ref: any;
    id: string;
}

export default function useChangeSlideOrder(props: useChangeSlideOrderProps) {
    // setting states

    const [elementY, _changeElementY] = React.useState(0);

    // setting states` refs

    const myCordsStateRef = React.useRef(elementY);
    const changeElementY = (data: any) => {
        myCordsStateRef.current = data;
        _changeElementY(data);
    };

    // setting dynamic cords and sizes

    React.useLayoutEffect(() => {
        if (! elementY) {
            const screenHeight = document.documentElement.clientHeight;
            const newTop = props.ref.current.getBoundingClientRect().y - screenHeight * 0.08 - screenHeight * 0.05
            changeElementY(newTop);
        } 
        if (props.ref.current && elementY) {
            props.ref.current.style.top = elementY + 'px';
            props.ref.current.style.position = 'absolute';
            props.ref.current.style.marginTop = 0;
        }
    });

    // setting dragging listener
    
    React.useEffect(() => {
        let initialCursorY: number;
        let initialY: number;
        const miniatureHeight = 156;
        const miniatureMargin = 50;
        const elOnMouseMove = (e: MouseEvent) => {
            if (props.ref.current) {
                const newY = elementY + e.pageY - initialCursorY;
                changeElementY(newY);
            }
        };
        const elOnMouseUp = (e: MouseEvent) => {
            window.removeEventListener('mousemove', elOnMouseMove);
            const offsetPx = myCordsStateRef.current - initialY;
            if (offsetPx > 0) {
                const offset = Math.floor((offsetPx - miniatureHeight - miniatureMargin) / miniatureHeight);
                dispatch(changeSlideOrder, {offset: offset, slideId: props.id});
            }
            if (offsetPx < 0) {
                const offset = -Math.floor((-offsetPx - miniatureMargin) / miniatureHeight);
                dispatch(changeSlideOrder, {offset: offset, slideId: props.id});
            }
        };
        const elOnMouseDown = (e: MouseEvent) => {
            if (props.ref.current && !e.defaultPrevented) {
                e.preventDefault();
                initialY = myCordsStateRef.current;
                initialCursorY = e.pageY;
                window.addEventListener('mouseup', elOnMouseUp, { once: true });
                window.addEventListener('mousemove', elOnMouseMove);
            }
        };
        props.ref.current.addEventListener('mousedown', elOnMouseDown, {
            once: true,
        });
        return () => {
            if (props.ref.current)
                props.ref.current.removeEventListener(
                    'mousedown',
                    elOnMouseDown
                );
        };
    });

}