import React from 'react'
import QuizInfor from './QuizInfor'
import QuizHistory from './QuizHistory'

export default function Quiz() {
    return (
        <div className='space-y-6'>
            <div className='w-full'>
                <QuizInfor/>
            </div>
            <div className='w-full'>
                <QuizHistory/>
            </div>
        </div>
    )
}
