'use client'
import { domain } from "@/constants/domain";
import { useAuthContext } from "@/contexts/AuthContext";
import { ApiResponse, fetchApi, fetchOptions } from "@/customLib/fetchApi";
import { Chapter } from "@/types/definition";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import { Loading, MustBeByCourse } from "../../AccessAlter";

interface resultFetch extends ApiResponse {
    metadata: {
        chapter: Chapter;
    };
}


export const LeftBarChapter = () => {
    const [chapter, setChapter] = useState<Chapter>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { user, handleGetToken } = useAuthContext();
    const params = useParams();
    const chapterSlug = params.chapterSlug;
    const courseSlug = params.slug;
    useEffect(() => {
        const url = `${domain}/chapter/${chapterSlug}`;
        const fetchChapter = async () => {
            const accessToken = await handleGetToken('accessToken');
            if(!user || !user.email || !courseSlug || !chapterSlug || !accessToken) {
                console.log(user);
                return;
            }

            const header: HeadersInit = {
                'x-course-id': courseSlug.toString(),
                'x-client-email': user?.email,
                'authorization': accessToken
            };
            const opts: fetchOptions = {
                header
            }
            try {
                const res: resultFetch = await fetchApi<resultFetch>({ url, opts });
                if(res.status === 200) {
                    setChapter(res.metadata.chapter);
                }
                console.log(res)
            } catch (error) {
                console.error("error", error);
            } finally {
                console.log('done fetch')
                setIsLoading(false);
            }
        }
        fetchChapter();
    }, [])

    console.log(isLoading)
    if(isLoading) {
        return (
            <div className="w-full h-full">
                <Loading/>
            </div>
        )
    }
    
    if(!chapter) {
        return (
            <div className="flex items-center h-full">
                <MustBeByCourse/>
            </div>
        )
    }

    return (
        <div className="w-full h-full">
            <iframe width="100%" height="70%" src="https://www.youtube.com/embed/P5Wt4iM80Mk?si=ruARxRlzvZBtsfR8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
        </div>
    )
}
