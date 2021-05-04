import React from 'react';
import useUi from '../../../../contexts/ui/useUi';

import { Container, Divider } from './styles';
import TextInput from '../TextInput';

type TypeProps = {
    course: string;
    institution: string;
    errors: { [key: string]: string };
    handleChange(key: string, value: string): void;
};

const index: React.FC<TypeProps> = props => {
    const { course, errors, institution, handleChange } = props;
    const { strings } = useUi();

    return (
        <Container>
            <TextInput
                name={strings.institution}
                placeholder={strings.typeSomething}
                value={institution}
                onChange={value => handleChange('institution', value)}
                error={errors.institution}
            />
            <Divider />
            <TextInput
                name={strings.course}
                placeholder={strings.typeSomething}
                value={course}
                onChange={value => handleChange('course', value)}
                error={errors.course}
            />
        </Container>
    );
};

export default index;
