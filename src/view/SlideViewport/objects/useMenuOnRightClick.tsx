import React from 'react';

export default function useMenuOnRightClick(el: any) {
    const elOnClick = (e: MouseEvent) => {
        alert(1);
    }
    React.useEffect(() => {
        if (el.current) {
            el.current.addEventListener('dblclick', elOnClick);
        }
        return () => {
            if (el.current) {
                el.current.removeEventListener('dblclick', elOnClick);
            }
        }
    })
}