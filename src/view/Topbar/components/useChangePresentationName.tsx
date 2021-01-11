import React from 'react';

export default function useChangePresentationName(input: React.RefObject<HTMLInputElement>, name: string, changeName: (name: string) => void) {
    function setFull() {
        if (input.current && input.current.value !== name) {
            input.current.value = name;
        }
    }
    
    function processName() {
        if (input.current && input.current.value === '') {
            const defaultName = 'new file';
            input.current.value = defaultName;
            changeName(defaultName);
        }

        if (input.current && input.current.value.length >= 15) {
            let value = input.current.value;
            let splittedValue = value.split('');
            splittedValue.splice(13);
            value = splittedValue.join('');
            input.current.value = value + '...';
        }

        // set the input width
        if (input.current) {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const font = getComputedStyle(input.current, 'font');
            if (! ctx) throw new Error();
            ctx.font = `${font.fontWeight} ${font.fontSize} ${font.fontFamily}`;
            const metrics = ctx.measureText(input.current.value);
            input.current.style.width = metrics.width + 'px';
        }
    }
    
    React.useEffect(() => {
        if (input.current) {
            input.current.value = name;
            processName();
            input.current.addEventListener('blur', processName);
            input.current.addEventListener('change', () => {
                if (input.current) changeName(input.current.value);
            }, {once: true});
            input.current.addEventListener('click', setFull);
        }
        return () => {
            if (input.current) {
                input.current.removeEventListener('click', setFull);
                input.current.removeEventListener('blur', processName);
            }
        }
    });
}