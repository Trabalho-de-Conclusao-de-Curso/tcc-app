import React from 'react';
import useUi from '../../../../contexts/ui/useUi';
import { TypeInterests } from '../../../../models/auth';

import { Container, Divider } from './styles';
import InterestsSelector from '../../../../components/InterestsSelector';

type TypeProps = {
    interests: TypeInterests;
    errors: { [key: string]: string };
    handleChange(key: string, value: TypeInterests): void;
};

const index: React.FC<TypeProps> = props => {
    const { interests, errors, handleChange } = props;
    const { strings } = useUi();

    //TODO: implements errors
    return (
        <Container>
            <InterestsSelector
                onInterestsChange={data => handleChange('interests', data)}
                initialValue={interests}
            />
            <Divider />
        </Container>
    );
};

export default index;
