import React, { useState } from 'react';
import { TypeInterests, TypeUser } from '../../models/auth';
import { StackActions } from '@react-navigation/native';

import useUi from '../../contexts/ui/useUi';
import useAuth from '../../contexts/auth/useAuth';
import { useNavigation } from '@react-navigation/core';

import {
    ButtonsView,
    Container,
    SaveButton,
    SaveButtonLabel,
    BackButton,
    BackButtonLabel,
    LblPageTitle,
} from './styles';

//Components
import Header from './components/Header';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';
import PageFour from './components/PageFour';
import PageFive from './components/PageFive';
import Loading from '../../components/Loading';

const index: React.FC = () => {
    const { strings } = useUi();
    const { user, editUser } = useAuth();
    const navigation = useNavigation();

    const [page, setPage] = useState<number>(0);
    const [values, setValues] = useState<TypeUser>(user!);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [loading, setLoading] = useState(false);
    const [photo, setPhoto] = useState<any>(undefined);

    const handleChange = (
        key: string,
        value: string | TypeInterests | string[]
    ) => {
        setValues({ ...values, [key]: value });
    };

    const handlePageTitle = (page: number): string => {
        switch (page) {
            default:
                return strings.personalData;
            case 3:
                return strings.formation;
            case 4:
                return strings.interests;
        }
    };

    const handleSave = async () => {
        if (!handleErrors()) return;
        setLoading(true);

        await editUser(values, photo);
        setLoading(false);
        navigation.dispatch(StackActions.pop());
    };

    const handleErrors = (): boolean => {
        let mErrors: { [key: string]: string } = {};

        if (values.name.length == 0) mErrors.name = strings.mustNotBeEmpty;

        if (values.email.length == 0) mErrors.email = strings.mustNotBeEmpty;

        setErrors(mErrors);
        if (Object.keys(mErrors).length > 0) return false;
        return true;
    };

    if (loading) return <Loading />;

    return (
        <Container>
            <Header
                onNext={() => (page == 4 ? setPage(0) : setPage(page + 1))}
                onPrevious={() => (page == 0 ? setPage(4) : setPage(page - 1))}
            />

            <LblPageTitle>{handlePageTitle(page)}</LblPageTitle>

            {page == 0 && (
                <PageOne
                    photoUrl={values.photo}
                    name={values.name}
                    email={values.email}
                    handleChange={handleChange}
                    handleChangePhoto={setPhoto}
                    errors={errors}
                />
            )}

            {page == 1 && (
                <PageTwo
                    gender={values.gender}
                    nationality={values.nationality}
                    bornDay={values.bornDay}
                    handleChange={handleChange}
                    errors={errors}
                />
            )}

            {page == 2 && (
                <PageThree
                    presentation={values.presentation}
                    languages={values.languages}
                    errors={errors}
                    handleChange={handleChange}
                />
            )}

            {page == 3 && (
                <PageFour
                    institution={values.institution}
                    course={values.course}
                    errors={errors}
                    handleChange={handleChange}
                />
            )}

            {page == 4 && (
                <PageFive
                    interests={values.interests}
                    errors={errors}
                    handleChange={handleChange}
                />
            )}

            <ButtonsView>
                <BackButton
                    onPress={() => navigation.dispatch(StackActions.pop())}
                >
                    <BackButtonLabel>{strings.back}</BackButtonLabel>
                </BackButton>
                <SaveButton onPress={handleSave}>
                    <SaveButtonLabel>{strings.save}</SaveButtonLabel>
                </SaveButton>
            </ButtonsView>
        </Container>
    );
};

export default index;
