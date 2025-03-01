import { ActionChapterReducerType, ActionChapterType } from '@/reducer/user/changeNavBarchapter'
import React, { Dispatch } from 'react'

interface navBarChapter {
    title: string,
    typeReducer: ActionChapterType
}
const defaultNavBarChapter: navBarChapter[] = [
    { title: 'Bình luận', typeReducer: ActionChapterType.COMMENT}, 
    { title: 'Khóa học', typeReducer: ActionChapterType.COURSE}
]
function NavBarChapter({ dispatch }: { dispatch: Dispatch<ActionChapterReducerType>}) {
    return (
        <div className='flex border-[#a9a7a7] border-y-[1px] mr-[-28px] text-gray-300'>
            {defaultNavBarChapter.map((item, index) => (
                <div 
                    key={index} 
                    className="flex-1 items-center justify-center inline-flex text-sm text-gray-500 hover:text-gray-600 transition-all duration-300 py-2"
                    onClick={() => dispatch({ type: item.typeReducer })}
                >
                    {item.title}
                </div>
            ))}
        </div>
    )
}

export default NavBarChapter