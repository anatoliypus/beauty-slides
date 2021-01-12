import React from 'react';
import styles from './Palette.module.css';
import closeIcon from '../img/close.svg';
import ColorBlock from './ColorBlock';
import ChangeOwnColor from './ChangeOwnColor';
import { connect } from 'react-redux';
import { AppType } from '../../../model/model';
import { paletteSampleColors } from '../../../index';

interface PaletteProps {
    visibility: boolean;
    changeVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    type: 'slide' | 'textColor' | 'strokeColor' | 'figureBG';
    usedColors: Array<string>;
}

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
