import React from 'react';
import useDragging from './useScaleResize';
import styles from './Text.module.css';
import { dispatch } from '../../../dispatcher';
import { changeText } from '../../../methods/methods';

interface TextProps {
    id: string;
    style: React.CSSProperties;
    data: string;
    x: number;
    y: number;
    kWidth: number;
    kHeight: number;
    choosed: boolean;
    onclick: (e: React.MouseEvent<HTMLElement>) => void;
}

export default function Text(props: TextProps) {

    const el = React.useRef<HTMLInputElement>(null);
    // const cords = React.useRef(useDragging(el, props.x, props.y, props.kWidth, props.kHeight, props.id, props.choosed));
    const [data, _changeData] = React.useState(props.data);
    const stateRef = React.useRef(data);
    const changeData = (text: string) => {
        stateRef.current = text;
        _changeData(text);
    }

    React.useEffect(() => {
        changeData(props.data);
    }, [props.data])
    
    // React.useEffect(() => {
    //     const change = () => {
    //         if (el.current) dispatch(changeText, {id: props.id, textData: el.current.value});
    //     };
    //     const secondClick = () => {
    //         if (el.current && stateRef.current) {
    //             el.current.value = stateRef.current;
    //             el.current.focus();
    //             el.current.addEventListener('change', change, {once: true});
    //         }
    //     }

    //     const firstClick = () => {
    //         if (el.current) {
    //             el.current.blur();
    //         }
    //     }

    //     if (el.current) {
    //         el.current.addEventListener('click', firstClick);
    //         el.current.addEventListener('dblclick', secondClick);
    //     }

    //     return () => {
    //         if (el.current) {
    //             el.current.removeEventListener('click', firstClick);
    //             el.current.removeEventListener('click', secondClick);
    //         }
    //     }
    // }, [cords.current]);

    return (
        <input className={styles.input} placeholder={props.data} ref={el} key={props.id} style={props.style} onClick={(e: React.MouseEvent<HTMLElement>) => {
            props.onclick(e);
        }} />
    );
}
