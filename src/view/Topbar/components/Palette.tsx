import React from 'react';
import styles from './Palette.module.css';
import closeIcon from '../img/close.svg';
import ColorBlock from './ColorBlock';
import ChangeOwnColor from './ChangeOwnColor';
import { connect } from 'react-redux';
import { AppType } from '../../../model/model';

interface PaletteProps {
    visibility: boolean;
    changeVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    type: 'slide' | 'textColor' | 'strokeColor' | 'figureBG';
    usedColors: Array<string>;
}

const paletteSampleColors = [
    '#dbeb33',
    '#3386eb',
    '#ff4d4d',
    '#ff4daf',
    '#b54dff',
    '#66d6ff',
    '#47ffce',
    '#47ff7b',
    '#e0ff47',
    '#ffbf47',
    '#ff6947',
    '#000000',
    '#ffffff',
    '#F0F8FF',
    '#DEB887',
    '#C71585',
    '#B0C4DE',
    '#90EE90',
    '#0000CD',
    '#40E0D0',
    '#4B0082',
    '#708090',
    '#808000',
    '#9932CC',
    '#B22222',
    '#ADFF2F',
    '#B8860B',
    '#FF0000',
    '#FF00FF',
    '#FF1493',
    '#FFA07A',
    '#FFB6C1',
    '#FFC0CB',
    '#FFD700',
];

function Palette(props: PaletteProps) {
    return (
        <>
            <div
                className={
                    props.visibility
                        ? `${styles.shadow} ${styles.shadow_visible}`
                        : `${styles.shadow} ${styles.shadow_hidden}`
                }
            >
                <div
                    className={
                        props.visibility
                            ? `${styles.palette} ${styles.palette_visible}`
                            : `${styles.palette} ${styles.palette_hidden}`
                    }
                >
                    <img
                        className={styles.palette__closeIcon}
                        src={closeIcon}
                        alt="close"
                        onClick={function () {
                            props.changeVisibility(false);
                        }}
                    />
                    <p className={styles.palette__heading}>Выбери цвет!</p>
                    <div className={styles.palette__colorBlocksList}>
                        {paletteSampleColors.map((item, index) => {
                            if (item)
                                return (
                                    <ColorBlock
                                        key={index}
                                        type={props.type}
                                        changeVisibility={
                                            props.changeVisibility
                                        }
                                        color={item}
                                    />
                                );
                        })}
                    </div>
                    {props.usedColors.length !== 0 && (
                        <div>
                            <p
                                style={{
                                    marginTop: '40px',
                                    fontSize: '20px',
                                    color: '#000',
                                    fontWeight: 400,
                                }}
                            >
                                Ранее использованные:
                            </p>
                            <div className={styles.palette__colorBlocksList}>
                                {props.usedColors.map((item, index) => {
                                    if (item)
                                        return (
                                            <ColorBlock
                                                key={index}
                                                type={props.type}
                                                changeVisibility={
                                                    props.changeVisibility
                                                }
                                                color={item}
                                            />
                                        );
                                })}
                            </div>
                        </div>
                    )}
                    <ChangeOwnColor
                        type={props.type}
                        changeVisibility={props.changeVisibility}
                    />
                </div>
            </div>
        </>
    );
}

interface PaletteOwnProps {
    visibility: boolean;
    changeVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    type: 'slide' | 'textColor' | 'strokeColor' | 'figureBG';
}

const mapStateToProps = (state: AppType, ownProps: PaletteOwnProps) => ({
    ...ownProps,
    usedColors: state.usedColors,
});

export default connect(mapStateToProps)(Palette);
