import React from 'react';
import FontSelectMenu from './FontSelectMenu';

interface FontSelectProps {
    fonts: Array<string>;
    selected: string;
}

export default function FontSelect(props: FontSelectProps) {
    const btn = React.useRef<HTMLButtonElement>(null);
    const [menuVisibility, changeMenuVisibility] = React.useState(false);
    const [menuX, changeMenuX] = React.useState('0px');
    const [menuY, changeMenuY] = React.useState('0px');

    const setMenuCords = () => {
        if (btn.current) {
            changeMenuX(btn.current.getBoundingClientRect().x + 'px');
            changeMenuY(
                btn.current.getBoundingClientRect().y +
                    btn.current.getBoundingClientRect().height +
                    10 +
                    'px'
            );
        }
    };

    React.useEffect(() => {
        const showMenu = () => {
            changeMenuVisibility(!menuVisibility);
        };
        if (btn.current) {
            btn.current.addEventListener('click', showMenu, { once: true });
        }

        return () => {
            if (btn.current) btn.current.removeEventListener('click', showMenu);
        };
    });

    React.useEffect(() => {
        setMenuCords();
        window.addEventListener('resize', setMenuCords);
        return () => {
            window.removeEventListener('resize', setMenuCords);
        }
    });

    const changeFontBtnStyle = {
        marginRight: '20px',
        backgroundColor: 'transparent',
        border: '1px solid #fff',
        borderRadius: '7px',
        padding: '4px 10px',
        cursor: 'pointer',
        color: '#fff'
    }

    return (
        <>
            <button ref={btn} style={changeFontBtnStyle}>
                <p>{props.selected}</p>
            </button>
            <FontSelectMenu changeVisibility={changeMenuVisibility} shown={menuVisibility} data={props.fonts} x={menuX} y={menuY} />
        </>
    );
}
