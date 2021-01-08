import React from 'react';
import styles from './ContextMenu.module.css';
import { changeTextFontFamily } from '../../../actions/actionsCreators';
import { AppType } from '../../../model/model';
import { connect } from 'react-redux';

interface FontSelectItemProps {
    data: Array<string>;
    x: string;
    y: string;
    shown: boolean;
    changeVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    changeTextFontFamily: (f: string) => void;
}

function FontSelectMenu(props: FontSelectItemProps) {
    const visibilityClass = props.shown ? styles.menu_showed : styles.menu_hidden;
    return (
        <div
            className={`${styles.menu} ${visibilityClass}`}
            style={{ top: props.y, left: props.x }}
        >
            {props.data.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={styles.menu__item}
                        onClick={() => {
                            props.changeTextFontFamily(item);
                            props.changeVisibility(false);
                        }}
                    >
                        <p className={styles.menu__item_p} style={{fontFamily: item}}>{item}</p>
                    </div>
                );
            })}
        </div>
    );
}

interface FontSelectItemOwnProps {
    data: Array<string>;
    x: string;
    y: string;
    shown: boolean;
    changeVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

const mapStateToProps = (state: AppType, ownProps: FontSelectItemOwnProps) => ownProps;
const mapDispatchToProps = {
    changeTextFontFamily
}

export default connect(mapStateToProps, mapDispatchToProps)(FontSelectMenu)