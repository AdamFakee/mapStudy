'use client'

import React, { Dispatch, useReducer, useState } from 'react'
import Search from './Search'
import {ButtonLight, Button} from './Button'
import { Subject } from '@/types/definition'
import dataSubjects from '@/data/subjects.json'
import { ActionCoursesReducerType, ActionType, filterCourses, FilterCoursesType } from '@/reducer/user/courses'
import { useRouter, useSearchParams } from 'next/navigation'

interface subjectProps {
    subjects: Subject[]
    filter: FilterCoursesType[],
    dispatch: Dispatch<ActionCoursesReducerType>;

}

const SubjectComponent = ({ subjects, filter, dispatch }: subjectProps) => {
    const handleAddItem = ( id : number ) => {
        dispatch({
            type: ActionType.ADD,
            id: id
        })
    }
    const handleDeleteItem = ( id : number ) => {
        dispatch({
            type: ActionType.DELETE,
            id: id
        })
    }
    return (
        <div className="flex items-center flex-wrap gap-3">
            {
                subjects.map(item => {
                    const isChoosen = filter.includes(item.id);
                    return (
                        <div key={item.id} onClick={() => {isChoosen ? handleDeleteItem(item.id) : handleAddItem(item.id)}}>
                            <div  style={{ backgroundColor: isChoosen ? '#155e94' : '#e9edf1', color: isChoosen ? '#fff' : '#222'}} className='px-4 py-1.5 rounded-lg cursor-pointer hover:bg-[#e1e3e7]'>
                                {item.title}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};



function FilterSideBar() {
    const [searchValue, setSearchValue] = useState<string>('');
    const [filters, dispatchFilters ] = useReducer(filterCourses, []);
    const router = useRouter();
    const searchParams = useSearchParams()

    // reducer
    const handleResetFilter = () => {
        dispatchFilters({
            type: ActionType.RESET
        })
    }
    // gán query cho url
    const handleSearch = (filters: FilterCoursesType[]) => {
        const queryParams = new URLSearchParams(searchParams.toString());
        if( searchValue.trim() ) {
            queryParams.set('search', searchValue.trim());
        } else {
            queryParams.delete('search');
        }
        
        if(filters.length) {
            queryParams.set('filters', filters.join(','));
        } else {
            queryParams.delete('filters');
        }

        router.push(`/courses?${queryParams.toString()}`, {
            scroll: false
        })
    }
    return (
        <div className='h-full space-y-5'>
            <div className="text-lg font-medium">Tìm kiếm</div>
            <Search placeHolder='Nhập tên khóa học' searchValue={searchValue} setSearchValue={setSearchValue}/>
            <div className='mb-2'>
                <div className="text-lg font-medium my-2">Môn học</div>
                <SubjectComponent subjects={dataSubjects} filter={filters} dispatch={dispatchFilters}/>
            </div>
            <div className='flex justify-end items-center gap-2'>
                <ButtonLight title='Đặt lại' fn={handleResetFilter} isActive={filters.length > 0 || searchValue.length > 0}/>
                <Button title='Lọc' fn={() => handleSearch(filters)} isActive={filters.length > 0 || searchValue.length > 0}/>
            </div>
        </div>
    )
}

export default FilterSideBar