import React from 'react';
import { changeSlideOrder } from '../../methods/methods';
import { dispatch } from '../../dispatcher';
import { miniatureRefObj } from './SlideCarousel';
import slideIcon from './img/template.svg';

export default function useChangeSlideOrder(
    refs: React.RefObject<Array<miniatureRefObj>>,
    carouselRef: React.RefObject<HTMLDivElement>
) {
    React.useEffect(() => {
        const elOnMouseDown = (
            e: MouseEvent,
            obj: miniatureRefObj,
            refs: React.RefObject<Array<miniatureRefObj>>
        ) => {
            const initialCursorY = e.pageY;
            let cursorY: number;
            const icon = document.createElement('img');
            icon.src = slideIcon;
            icon.style.position = 'absolute';
            icon.style.zIndex = '1000';
            icon.style.width = '50px';
            icon.style.height = '50px';
            document.body.append(icon);
            const onMouseMove = (e: MouseEvent) => {
                cursorY = e.pageY;
                e.preventDefault();

                let scrollDownPoint: number = -1;
                let scrollUpPoint: number = -1;

                if (carouselRef.current) {
                    const rect = carouselRef.current.getBoundingClientRect();
                    scrollDownPoint = rect.top + rect.height * 0.95;
                    scrollUpPoint = rect.top + rect.height * 0.05;
                }

                if (cursorY >= scrollDownPoint) {
                    const int = setInterval(() => {
                        if (carouselRef.current)
                            carouselRef.current.scrollTop += 3;
                    }, 5);
                    window.addEventListener('mousemove', () => {
                        clearInterval(int);
                    }, {once: true})
                }

                if (cursorY <= scrollUpPoint && carouselRef.current) {
                    const int = setInterval(() => {
                        if (carouselRef.current)
                            carouselRef.current.scrollTop -= 3;
                    }, 5);
                    window.addEventListener('mousemove', () => {
                        clearInterval(int);
                    }, {once: true})
                }

                if (Math.abs(cursorY - initialCursorY) > 5) {
                    document.body.style.cursor = 'grabbing';
                    e.preventDefault();
                    icon.style.top = e.pageY + 'px';
                    icon.style.left = e.pageX + 'px';
                    if (cursorY && refs.current) {
                        let last: number = 0;
                        let ref;
                        for (let slide of refs.current) {
                            if (slide.ref.current) {
                                let top = slide.ref.current.getBoundingClientRect()
                                    .top + slide.ref.current.getBoundingClientRect().height / 2;
                                if (top < cursorY && top > last) {
                                    last = top;
                                    ref = slide.ref;
                                }
                            }
                        }
                        for (let slide of refs.current) {
                            if (slide.ref.current) {
                                slide.ref.current.style.borderBottom =
                                    '2px solid transparent';
                                slide.ref.current.style.borderTop =
                                    '2px solid transparent';
                            }
                        }
                        if (ref && ref.current) {
                            ref.current.style.borderBottom = '2px solid white';
                        } else {
                            if (refs.current) {
                                let minTop: number | null = null;
                                let topElRef: React.RefObject<HTMLElement> | null = null;
                                for (let i = 0; i < refs.current.length; i++) {
                                    let ref = refs.current[i].ref;
                                    if (ref.current) {
                                        if (! minTop || ref.current.getBoundingClientRect().top < minTop) {
                                            minTop = ref.current.getBoundingClientRect().top;
                                            topElRef = ref;
                                        }
                                    }
                                }
                                if (topElRef && topElRef.current) topElRef.current.style.borderTop = '2px solid white';
                            }
                        }
                    }
                }
            };
            const onMouseUp = () => {
                icon.remove();
                document.body.style.cursor = '';
                window.removeEventListener('mousemove', onMouseMove);
                if (cursorY && refs.current) {
                    let slideAfterId = '0';
                    let last: number = 0;
                    for (let slide of refs.current) {
                        if (slide.ref.current) {
                            slide.ref.current.style.borderBottom =
                                '2px solid transparent';
                            slide.ref.current.style.borderTop =
                                '2px solid transparent';
                            let top = slide.ref.current.getBoundingClientRect()
                                .top + slide.ref.current.getBoundingClientRect().height / 2;
                            if (top < cursorY && top > last) {
                                slideAfterId = slide.id;
                                last = top;
                            }
                        }
                    }

                    dispatch(changeSlideOrder, {
                        slideAfterId: slideAfterId,
                        slideId: obj.id,
                    });
                }
            };
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp, { once: true });
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
