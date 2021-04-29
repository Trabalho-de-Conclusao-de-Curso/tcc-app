import React, {
    createContext,
    useState,
    useEffect,
    useCallback,
    Dispatch,
    SetStateAction,
} from 'react';

import { TypeInterests } from '../../models/auth';
import { TypeOpp } from '../../models/opp';
import { TypeOrg } from '../../models/org';
import { TypePost } from '../../models/post';

import { oppApi } from '../../services';

type TypeDataContext = {
    opps: TypeOpp[];
    favOpps: TypeOpp[];
    opp: TypeOpp | null;
    setOpp: Dispatch<SetStateAction<TypeOpp | null>>;
    org: TypeOrg | null;
    posts: TypePost[];
    loading: boolean;
    loadOpps: (interests: TypeInterests) => void;
    loadFavOpps: (favOpps: string[]) => void;
    loadOrg: (orgId: string) => void;
    loadPosts: () => void;
};

const DataContext = createContext<TypeDataContext>({} as TypeDataContext);

export const DataProvider: React.FC = ({ children }) => {
    const [opps, setOpps] = useState<TypeOpp[]>([]);
    const [favOpps, setFavOpps] = useState<TypeOpp[]>([]);
    const [opp, setOpp] = useState<TypeOpp | null>(null);
    const [org, setOrg] = useState<TypeOrg | null>(null);
    const [posts, setPosts] = useState<TypePost[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const loadOpps = useCallback(async (interests: TypeInterests) => {
        try {
            setLoading(true);

            const { data } = await oppApi.getOpps(interests);

            setOpps(data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }, []);

    const loadFavOpps = useCallback(async (favOpps: string[]) => {
        try {
            const { data } = await oppApi.getFavOpps(favOpps);

            setFavOpps(data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }, []);

    //TODO: implement loadOrg
    const loadOrg = useCallback(async (orgId: string) => {}, []);

    //TODO: implement loadPosts
    const loadPosts = useCallback(async () => {}, []);

    return (
        <DataContext.Provider
            value={{
                opps,
                favOpps,
                opp,
                setOpp,
                org,
                posts,
                loading,
                loadOpps,
                loadFavOpps,
                loadOrg,
                loadPosts,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
