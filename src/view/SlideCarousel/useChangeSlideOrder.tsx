import React from 'react';
import { changeSlideOrder } from '../../methods/methods';
import { dispatch } from '../../dispatcher';
import { miniatureRefObj } from './SlideCarousel';

export default function useChangeSlideOrder(
    refs: React.RefObject<Array<miniatureRefObj>>
) {
    React.useEffect(() => {
        const elOnMouseDown = (e: MouseEvent, obj: miniatureRefObj, refs: React.RefObject<Array<miniatureRefObj>>) => {
            let cursorY: number;
            const initialCursorY = e.pageY;
            const onMouseMove = (e: MouseEvent) => {
                e.preventDefault();
                cursorY = e.pageY;
            }
            const onMouseUp = () => {
                window.removeEventListener('mousemove', onMouseMove);
                if (cursorY && refs.current) {
                    let slideAfterId = '0';
                    let last: number = 0;
                    for (let slide of refs.current) {
                        if (slide.ref.current) {
                            let top = slide.ref.current.getBoundingClientRect().top;
                            if (top < cursorY && top > last) {
                                slideAfterId = slide.id;
                                last = top
                            }
                        }
                    }
                    dispatch(changeSlideOrder, {slideAfterId: slideAfterId, slideId: obj.id});
                }
            }
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp, {once: true});
        };
        if (refs.current) {
            for (let slide of refs.current) {
                if (slide.ref.current)
                    slide.ref.current.onmousedown = (e: MouseEvent) => {
                        elOnMouseDown(e, slide, refs);
                    };
            }
        }
    });
}
