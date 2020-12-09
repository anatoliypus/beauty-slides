import React from 'react';
import { changeSlideOrder } from '../../methods/methods';
import { dispatch } from '../../dispatcher';
import { miniatureRefObj } from './SlideCarousel';
import slideIcon from './img/template.svg';

export default function useChangeSlideOrder(
    refs: React.RefObject<Array<miniatureRefObj>>
) {
    React.useEffect(() => {
        const elOnMouseDown = (e: MouseEvent, obj: miniatureRefObj, refs: React.RefObject<Array<miniatureRefObj>>) => {
            const initialCursorY = e.pageY;
            let cursorY: number;
            const icon = document.createElement('img');
            icon.src = slideIcon;
            icon.style.position = 'absolute';
            icon.style.width = '50px';
            icon.style.height = '50px';
            document.body.append(icon);
            const onMouseMove = (e: MouseEvent) => {
                cursorY = e.pageY;
                if (Math.abs(cursorY - initialCursorY) > 5) {
                    document.body.style.cursor = 'grabbing';
                    e.preventDefault();
                    icon.style.top = e.pageY + 'px';
                    icon.style.left = e.pageX + 'px';
                }
            }
            const onMouseUp = () => {
                icon.remove();
                document.body.style.cursor = '';
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
