'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// dùng khi muốn lấy query trên url 
export const useQueryParams = () => {
    const params = useSearchParams();
    const [query, setQuery] = useState<string>('');
    useEffect(() => {
        setQuery(params.toString());
    }, [params]);

    return query;
}