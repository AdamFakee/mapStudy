'use client'
import { Category } from '@/types/definition'
import React, { useEffect, useState } from 'react'
import { CategoryCard } from '../Card'
import Link from 'next/link'
import { ApiResponse, fetchApi } from '@/customLib/fetchApi'
import { domain } from '@/constants/domain'

const TitleComponent = (
        { title, buttonTitle, closeTitle, handleOpen, isOpen, isShowSeeMore }: 
        { title: string, buttonTitle: string, closeTitle: string, handleOpen: () => void, isOpen: boolean, isShowSeeMore: boolean}
    ) => {
    return (
        <div
            className='flex justify-between items-center'
        >
            <p className='font-semibold text-xl text-secondary-typo'>{title}</p>
            {
                isShowSeeMore &&
                    <button             
                        onClick={handleOpen}
                        className='inline-flex justify-end items-center gap-2'
                    >
                        <p>{isOpen == false? buttonTitle : closeTitle }</p>
                    </button>
            }
        </div>
    )
}

interface resultFetch extends ApiResponse {
    metadata: {
        categories: Category[];
    }
}

function ListCategory() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isShowSeeMore, setIsShowSeeMore] = useState<boolean>(false)
    const handleOpen = () => setIsOpen(!isOpen)
    const [ categories, setCategories ] = useState<Category[]>();

    // call api
    const url = domain + '/category?limit=8';
    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const res: resultFetch = await fetchApi({ url });
                setCategories(res.metadata.categories);
                
                // Check if there are more than 5 categories to show see more button
                if (res.metadata.categories.length > 5) {
                    setIsShowSeeMore(true);
                } else {
                    setIsShowSeeMore(false);
                }
            } catch (error) {
                console.error("Failed to fetch teachers:", error);
            }
        }
        fetchCategory();
    }, [url])


    return (
        <div className='space-y-2'>
            <TitleComponent 
                title="Danh mục" 
                buttonTitle={isOpen ? 'Thu gọn' : 'Xem thêm'} 
                closeTitle="Thu gọn" 
                handleOpen={handleOpen} 
                isOpen={isOpen}
                isShowSeeMore={isShowSeeMore}
            />
            <div className={`grid ${isOpen ? 'grid-rows-2' : 'grid-rows-1'} md:grid-cols-5 grid-cols-2 gap-3`}>
                {
                    categories?.map((item, index )=> {
                        const checkLastItem = index === categories.length - 1;
                        return (
                            <Link
                                href={`/courses/category/${item.id}`}
                                key={item.id}

                                // k show nút xem thêm => xóa luôn hiệu ứng cuộn trang
                                className={`${isOpen ? 'open' : ''} ${checkLastItem && categories.length > 5 ? 'scroll-container' : ''}`}
                            >
                                <CategoryCard item={item} />
                            </Link>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default ListCategory