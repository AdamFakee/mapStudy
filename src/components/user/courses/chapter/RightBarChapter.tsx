'use client'
import { useReducer } from "react"
import Comment from "../../Comment"
import NavBarChapter from "./NavBarChapter"
import { ActionChapterStateValue, changeNavBarChapter } from "@/reducer/user/changeNavBarchapter"
import ListCourses from "../ListCourses"

export const RightBarChapter = () => {
    const [changeNavBar, dispatchChangeNavBar] = useReducer(changeNavBarChapter, ActionChapterStateValue.COMMENT)
    const apiListCourser = '/course/filter'
    return (
        <div className="w-full h-[80%] bg-transparent border-[#a9a7a7] border-l-[1px]">
            {/* navbar */}
            <div className="w-full">
                <NavBarChapter dispatch={dispatchChangeNavBar}/>
            </div>
            {/* body */}
            <div className='space-y-5 bg-transparent px-3 py-2 rounded-lg '>
                {/* comment */}
                {
                    changeNavBar === ActionChapterStateValue.COMMENT ? <Comment/> : <ListCourses api={apiListCourser}/>
                }
            </div>
        </div>
    )
}