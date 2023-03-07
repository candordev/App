import React, { forwardRef } from 'react';
import {Text as RNText} from 'react-native';
import styles from '../../Styles/styles';

type TextProps = {
    children: any,
    style: any,
};

const Text = forwardRef<TextProps, any>(({ style, children, ...props}, ref) => {
    return <RNText style={[styles.text, style]} ref={ref} {...props}>
        {children}
    </RNText>;
});

Text.displayName = 'Text';

export default Text;
