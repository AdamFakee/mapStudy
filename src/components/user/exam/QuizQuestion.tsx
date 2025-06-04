'use client'
import { Question } from '@/types/definition';
import React from 'react'

const Ques = ({ value, keys, id, fnCheckAnswer, fnAddAnswer }: {value: string|number, keys: string, id: number, fnAddAnswer: (id: number, answer: string) => void,
    fnCheckAnswer: (id: number) => string}) => {
    return (
        <>
            <input
                type="radio"
                name={id.toString()}
                id={id.toString() + keys}
                value={value}
                checked={keys === fnCheckAnswer(id)}
                onClick={() => fnAddAnswer(id, keys)}
                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <label className="flex items-center gap-3 cursor-pointer" htmlFor={id.toString() + keys} >         
                <span className="text-gray-800">
                    {keys}. {value}
                </span>
            </label>
        </>
    )
}

interface QuizQuestionType {
    pos: number;
    question: Question;
    fnAddAnswer: (id: number, answer: string) => void;
    fnCheckAnswer: (id: number) => string;
}
function QuizQuestion({ pos, question, fnAddAnswer, fnCheckAnswer }: QuizQuestionType) {
    const displayKeys: (keyof Question)[] = ["A", "B", "C", "D"];
    return (
        <div className='space-y-3'>
            {/* title */}
            <div className='text-black font-medium text-lg'>
                <span>{pos}. {question.title} </span>
            </div>
            {/* question */}
            <div className="flex flex-col gap-3">
                {displayKeys.map((item, index) => {
                    return (
                        <div key={index} className='inline-flex items-center gap-2'>
                            <Ques keys={item} fnAddAnswer={fnAddAnswer} fnCheckAnswer={fnCheckAnswer} value={question[item]} id={question.id}/>            
                        </div>
                    )
                })}
                    
            </div>
        </div>
    )
}

export default QuizQuestion
