import React, { useEffect, useState } from 'react';

import useUi from '../../contexts/ui/useUi';
import useData from '../../contexts/data/useData';
import useAuth from '../../contexts/auth/useAuth';

import { Container } from './styles';
import { ScrollView } from 'react-native';

//Components
import AppBar from '../../components/AppBar';
import PostCard from '../../components/PostCard';
import Loading from '../../components/Loading';

const index: React.FC = () => {
    const { strings } = useUi();
    const { posts, loading, loadPosts, likePosts } = useData();
    const { user } = useAuth();

    useEffect(() => {
        loadPosts();
    }, []);

    const handleLike = (postId: string) => {
        likePosts(postId, user!.id);
    };

    return (
        <Container>
            <AppBar title={strings.appName} />
            {loading ? (
                <Loading />
            ) : (
                <ScrollView style={{ paddingTop: 10 }}>
                    {posts.map((item, index) => (
                        <PostCard
                            key={index}
                            post={item}
                            onLike={() => handleLike(item.id)}
                            onOrgPress={() => console.log('org')}
                        />
                    ))}
                </ScrollView>
            )}
        </Container>
    );
};

export default index;
