import React from 'react';
import useUi from '../../../../contexts/ui/useUi';

import { Container, Divider } from './styles';
import TextInput from '../TextInput';

type TypeProps = {
    nationality: string;
    gender: string;
    bornDay: string;
    errors: { [key: string]: string };
    handleChange(key: string, value: string): void;
};

const index: React.FC<TypeProps> = props => {
    const { nationality, errors, gender, handleChange, bornDay } = props;
    const { strings } = useUi();

    return (
        <Container>
            <TextInput
                name={strings.gender}
                placeholder={strings.typeSomething}
                value={gender}
                onChange={value => handleChange('gender', value)}
                error={errors.gender}
            />
            <Divider />
            <TextInput
                name={strings.nationality}
                placeholder={strings.typeSomething}
                value={nationality}
                onChange={value => handleChange('nationality', value)}
                error={errors.nationality}
            />
            <Divider />
            <TextInput
                name={strings.bornDay}
                placeholder={strings.typeSomething}
                value={bornDay}
                onChange={value => handleChange('bornDay', value)}
                error={errors.bornDay}
            />
        </Container>
    );
};

export default index;
