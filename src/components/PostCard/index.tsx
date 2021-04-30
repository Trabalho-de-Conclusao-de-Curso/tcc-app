import React, { useEffect, useState } from 'react';
import { TypePost } from '../../models/post';

import useUi from '../../contexts/ui/useUi';
import useAuth from '../../contexts/auth/useAuth';

import { MaterialIcons as Icon } from '@expo/vector-icons';

import {
    Container,
    RowView,
    LblBody,
    LblOrg,
    OrgImg,
    PostImg,
    LblLikes,
    Divider,
    Button,
} from './styles';

type TypeProps = {
    post: TypePost;
    onOrgPress(): void;
    onLike(): void;
};

const index: React.FC<TypeProps> = ({ post, onOrgPress, onLike }) => {
    const { theme } = useUi();
    const { user } = useAuth();

    const [liked, setLiked] = useState<boolean>(false);

    useEffect(() => {
        if (user === null) return;
        setLiked(post.likes.includes(user.id));
    }, [user, post]);

    return (
        <Container>
            <RowView>
                <Button onPress={onOrgPress}>
                    <OrgImg source={{ uri: post.orgLogo }} />
                </Button>
                <Button onPress={onOrgPress}>
                    <LblOrg>{post.orgName}</LblOrg>
                </Button>
            </RowView>
            <PostImg source={{ uri: post.image }} />
            <LblBody>{post.body}</LblBody>
            <RowView>
                <Button onPress={onLike}>
                    <Icon
                        name={'thumb-up'}
                        color={
                            liked
                                ? theme.colors.primary
                                : theme.colors.unselected
                        }
                        size={24}
                    />
                </Button>
                <LblLikes>{post.likes.length}</LblLikes>
            </RowView>
            <Divider />
        </Container>
    );
};

export default index;
