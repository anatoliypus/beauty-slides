import React from 'react';
import styles from './Palette.module.css';
import { setSlideBg, changeTextColor, figureBackgroundSet, strokeColorSet } from '../../../actions/actionsCreators';
import { connect } from 'react-redux';
import { AppType } from '../../../model/model';

interface ChangeOwnColorProps {
    type: 'slide' | 'textColor' | 'strokeColor' | 'figureBG';
    changeVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    setSlideBg: (c: string) => void;
    changeTextColor: (c: string) => void;
    figureBackgroundSet: (c: string) => void;
    strokeColorSet: (c: string) => void;
}

function ChangeOwnColor(props: ChangeOwnColorProps) {
    const ref = React.useRef<HTMLInputElement>(null);
    const [color, changeColor] = React.useState<string>('#000000');
    const submit = () => {
        if (ref.current) {
            if (props.type === 'slide') {
                props.setSlideBg(color);
            } else if (props.type === 'textColor') {
                props.changeTextColor(color);
            } else if (props.type === 'figureBG') {
                props.figureBackgroundSet(color);
            } else if (props.type === 'strokeColor') {
                props.strokeColorSet(color);
            }
            props.changeVisibility(false);
        }
    }
    React.useEffect(() => {
        if (ref.current) {
            changeColor(ref.current.value);
        }
    }, []);
    return (
        <div className={styles.changeColorBlock}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <p>Или свой здесь:</p>
                <input
                    ref={ref}
                    type="color"
                    className={styles.colorsInput}
                    value="#000000"
                    onChange={(e) => {if (ref.current) changeColor(ref.current.value)}}
                />
            </div>
            <button onClick={submit} className={styles.applyBtn}>Применить</button>
        </div>
    );
}

interface ChangeOwnColorOwnProps {
    type: 'slide' | 'textColor' | 'strokeColor' | 'figureBG';
    changeVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

const mapStateToProps = (state: AppType, ownProps: ChangeOwnColorOwnProps) => ownProps;
const mapDispatchToProps = {
    setSlideBg, 
    changeTextColor, 
    figureBackgroundSet, 
    strokeColorSet
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeOwnColor)
