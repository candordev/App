import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from '../Styles/styles';

type SectionProps = PropsWithChildren<{
    title: string;
    description: string;
  }>;
  
function Section({children, title, description}: SectionProps): JSX.Element {
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={styles.sectionTitle}>
                {title}
            </Text>
            <Text
                style={styles.sectionDescription}>
                {description}
            </Text>
        </View>
    );
}

export default Section;