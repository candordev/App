import React, { forwardRef } from 'react';
import {Text as RNText} from 'react-native';
import styles from '../../Styles/styles';

type HeaderTextProps = {
    children: any,
    style: any,
};

const HeaderText = forwardRef<HeaderTextProps, any>(({ style, children, ...props}, ref) => {
    return <RNText style={[styles.headerText, style]} ref={ref} {...props}>
        {children}
    </RNText>;
});

HeaderText.displayName = 'Text';

export default HeaderText;
