import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './styles';

type SectionProps = PropsWithChildren<{
    title: string;
  }>;
  
function Section({children, title}: SectionProps): JSX.Element {
    return (
        <View style={styles.sectionContainer}>
        <Text
            style={styles.sectionTitle}>
            {title}
        </Text>
        <Text
            style={styles.sectionDescription}>
            {children}
        </Text>
        </View>
    );
}

export default Section;