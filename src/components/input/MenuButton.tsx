import * as React from 'react';
import * as classNames from 'classnames';

import * as style from './MenuButton.css';

interface MenuButtonProps {
    label: string;
    disabled?: boolean;
    onClick: () => void;
    className?: string;
}

export default class extends React.Component<MenuButtonProps> {
    render() {
        const {
            label,
            disabled,
            onClick,
            className,
        } = this.props;
        return <div
            onClick={() => disabled || onClick()}
            className={classNames(style.button, {
                [style.disabled]: disabled,
            }, className)}>
            <div className={classNames(style.label)}>
                { label }
            </div>
        </div>;
    }
}
