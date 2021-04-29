import React, { useEffect, useState } from 'react';

import styled from 'styled-components/native';
import { TypeInterests } from '../models/auth';
import useUi from '../contexts/ui/useUi';

import InterestCard from './InterestCard';

const Container = styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

type TypeProps = {
    onInterestsChange(interests: TypeInterests): void;
};

const InterestsSelector: React.FC<TypeProps> = ({ onInterestsChange }) => {
    const { strings } = useUi();
    const [interests, setInterests] = useState<TypeInterests>({
        animals: false,
        humanRights: false,
        sports: false,
        environment: false,
        health: false,
        education: false,
    });

    useEffect(() => {
        onInterestsChange(interests);
    }, [interests]);

    return (
        <Container>
            <InterestCard
                icon="paw"
                selected={interests.animals}
                label={strings.animals}
                onPress={() =>
                    setInterests({ ...interests, animals: !interests.animals })
                }
            />
            <InterestCard
                icon="hand"
                selected={interests.humanRights}
                label={strings.humanRights}
                onPress={() =>
                    setInterests({
                        ...interests,
                        humanRights: !interests.humanRights,
                    })
                }
            />
            <InterestCard
                icon="ball"
                selected={interests.sports}
                label={strings.sports}
                onPress={() =>
                    setInterests({ ...interests, sports: !interests.sports })
                }
            />
            <InterestCard
                icon="leaf"
                selected={interests.environment}
                label={strings.environment}
                onPress={() =>
                    setInterests({
                        ...interests,
                        environment: !interests.environment,
                    })
                }
            />
            <InterestCard
                icon="pills"
                selected={interests.health}
                label={strings.health}
                onPress={() =>
                    setInterests({ ...interests, health: !interests.health })
                }
            />
            <InterestCard
                icon="gradHat"
                selected={interests.education}
                label={strings.education}
                onPress={() =>
                    setInterests({
                        ...interests,
                        education: !interests.education,
                    })
                }
            />
        </Container>
    );
};

export default InterestsSelector;
