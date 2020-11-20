import React from 'react';

export default function useMenuOnRightClick(el: any) {
    const elOnClick = (e: MouseEvent) => {
        if (e.which === 3) {
            alert(1);
        }
    }
    React.useEffect(() => {
        if (el.current) {
            el.current.addEventListener('click', elOnClick);
        }
        return () => {
            if (el.current) {
                el.removeEventListener('click', elOnClick);
            }
        }
    })
}