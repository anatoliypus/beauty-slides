import React from 'react';

interface useChangeTextProps {
    id: string;
    el: React.RefObject<HTMLTextAreaElement>;
    data: string;
    changeTextData: (data: string) => void;
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
            if (props.el.current) props.changeTextData(props.el.current.value)
        };
        const secondClick = () => {
            if (props.el.current && (stateRef.current === '' || stateRef.current)) {
                props.el.current.value = stateRef.current;
                props.el.current.focus();
                props.el.current.addEventListener('blur', change, {once: true});
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