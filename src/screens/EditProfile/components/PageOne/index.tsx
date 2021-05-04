import React from 'react';
import useUi from '../../../../contexts/ui/useUi';
import * as ImagePicker from 'expo-image-picker';

import {
    Container,
    PhotoSection,
    UserImg,
    EditPhotoButton,
    EditPhotoButtonLabel,
    Divider,
} from './styles';
import TextInput from '../TextInput';

type TypeProps = {
    photoUrl: string;
    name: string;
    email: string;
    errors: { [key: string]: string };
    handleChange(key: string, value: string): void;
    handleChangePhoto(photo: any): void;
};

const index: React.FC<TypeProps> = props => {
    const {
        photoUrl,
        errors,
        name,
        handleChange,
        email,
        handleChangePhoto,
    } = props;
    const { strings } = useUi();

    //TODO: implements photo changing
    const handlePhoto = async () => {
        const {
            status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== 'granted') return;

        const result: any = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (result.cancelled) return;
        handleChange('photo', result.uri);
        handleChangePhoto(result);
    };

    return (
        <Container>
            <PhotoSection>
                <UserImg source={{ uri: photoUrl }} />
                <EditPhotoButton onPress={handlePhoto}>
                    <EditPhotoButtonLabel>
                        {strings.editPhoto}
                    </EditPhotoButtonLabel>
                </EditPhotoButton>
            </PhotoSection>
            <Divider />
            <TextInput
                name={strings.name}
                placeholder={strings.typeSomething}
                value={name}
                onChange={value => handleChange('name', value)}
                error={errors.name}
                hint={strings.nameHint}
            />
            <Divider />
            <TextInput
                name={strings.email}
                placeholder={strings.typeSomething}
                value={email}
                onChange={value => handleChange('email', value)}
                error={errors.email}
            />
        </Container>
    );
};

export default index;
