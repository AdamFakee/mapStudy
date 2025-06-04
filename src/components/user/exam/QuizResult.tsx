'use client'
import { Question } from '@/types/definition';
import React from 'react'
import { LuBadgeX, LuBadgeCheck } from "react-icons/lu";

const Ques = ({value, keys, isRight = false, isAnswer}: {value: string, keys: string, isRight?: boolean, isAnswer: boolean}) => {
    let bgColor = "";
    let IconCheck: React.ReactNode;
    if (isAnswer && isRight) {
        IconCheck = <LuBadgeCheck className="w-5 h-5 text-green-500" />; 
        bgColor = "bg-green-200"; // Người dùng chọn đúng
    } else if (isAnswer && !isRight) {
        IconCheck = <LuBadgeX className="w-5 h-5 text-red-500" />; 
        bgColor = "bg-red-200"; // Người dùng chọn sai
    } else if (!isAnswer && isRight) {
        bgColor = "bg-blue-200"; // Đáp án đúng nhưng người dùng không chọn
    }
    return (
        <div className={`w-full flex items-center justify-between ${bgColor}`}>
            <div className='inline-flex items-center gap-3'>
                <input
                    readOnly={true}
                    type="radio"
                    value={value}
                    checked={isAnswer}
                    className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <label className="flex items-center gap-3 cursor-pointer">         
                    <span className="text-gray-800">
                        {keys}. {value}
                    </span>
                </label>
            </div>
            {IconCheck}
        </div>
    )
}

interface QuizQuestionType {
    pos: number;
    isRight?: boolean;
    answer: string;
    question: Question;
}
function QuestionResult({ pos, question, answer }: QuizQuestionType) {
    const displayKeys: (keyof Question)[] = ["A", "B", "C", "D"];
    return (
        <div className='space-y-3'>
            {/* title */}
            <div className='text-black font-medium text-lg'>
                <span>{pos}. {question.title} </span>
            </div>
            {/* question */}
            <div className="flex flex-col gap-2">
                {displayKeys.map((item, index) => {
                    const isRight = item === question.result; // Kiểm tra đáp án đúng
                    const isAnswer = item === answer; // Kiểm tra đáp án người dùng chọn
                    return (
                        <div key={index} className='inline-flex items-center gap-2'>
                            <Ques keys={item} value={question[item].toString()} isRight={isRight} isAnswer={isAnswer}/>            
                        </div>
                    )
                })}
                    
            </div>
        </div>
    )
}

export default QuestionResult;
