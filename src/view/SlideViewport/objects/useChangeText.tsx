import React from 'react';
import { dispatch } from '../../../dispatcher';
import { changeText } from '../../../methods/methods';


interface useChangeTextProps {
    id: string;
    el: React.RefObject<HTMLInputElement>;
    data: string;
}

export default function useChangeText(props: useChangeTextProps) {
    const [data, _changeData] = React.useState(props.data);
    const stateRef = React.useRef(data);
    const changeData = (text: string) => {
        stateRef.current = text;
        _changeData(text);
    }

    React.useEffect(() => {
        changeData(props.data);
    }, [props.data])

    React.useEffect(() => {
        const change = () => {
            if (props.el.current) dispatch(changeText, props.el.current.value);
        };
        const secondClick = () => {
            if (props.el.current && stateRef.current) {
                props.el.current.value = stateRef.current;
                props.el.current.focus();
                props.el.current.addEventListener('change', change, {once: true});
            }
        }

        const firstClick = () => {
            if (props.el.current) {
                props.el.current.blur();
            }
        }

        if (props.el.current) {
            props.el.current.addEventListener('click', firstClick);
            props.el.current.addEventListener('dblclick', secondClick);
            props.el.current.value = data;
        }

        return () => {
            if (props.el.current) {
                props.el.current.removeEventListener('click', firstClick);
                props.el.current.removeEventListener('dblclick', secondClick);
            }
        }
    });
}