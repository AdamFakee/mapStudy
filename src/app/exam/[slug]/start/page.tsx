'use client'
import Swal from 'sweetalert2'
import QuizQuestion from '@/components/user/exam/QuizQuestion'
import React, { useReducer, useState } from 'react'
import dataExam from '@/data/exam.json';
import { Question } from '@/types/definition';
import { examQuestion, ExamQuestionType } from '@/reducer/user/examQuestion';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
function Page() {
    const [currPage, setCurrPage] = useState<number>(1);
    const [resultExam, disPatchResultExam] = useReducer(examQuestion, {});
    const router = useRouter();
    const params = useParams();
    const {slug} = params; // id của đề 
    const keyInObj = 'quizSet' + slug;
    const limit = 4;
    const skip = (currPage - 1) * limit;
    const listQuizs: Question[] = dataExam[keyInObj].slice(skip, skip+4) || [];

    if(listQuizs.length === 0) {
        return (
            <div className='fixedHeight flex flex-col gap-3 justify-center items-center'>
              <div className='text-center'>Bài thi Không tồn tại</div>
                <div className='text-center'>
                  <Link href='/' className='px-4 py-2 rounded-md bg-primary text-white font-semibold'>
                    Quay lại trang chủ
                  </Link>
                </div>
            </div>
        ) 
    }
    const handleCheckAnswer = (id: number): string => {
        return resultExam[id]
    }
    const handleAddAnswer = (id: number, answer: string): void => {
        disPatchResultExam({
            type: ExamQuestionType.CHANGE,
            value: {id, answer}
        });
    }
    const handlePrevious = () => {
        if(currPage === 1) {
            setCurrPage(Math.ceil(50/4));
        } else {
            setCurrPage(currPage - 1);
        }
    }
    const handleNext = () => {
        if(currPage === Math.ceil(50/4)) {
            setCurrPage(1);
        } else {
            setCurrPage(currPage + 1);
        }
    }

    const handleSubmit = async () => {
        const result = await Swal.fire({
          title: "Xác nhận nộp bài",
          text: "Bạn có chắc chắn muốn nộp bài không?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Có",
          cancelButtonText: "Không",
        });
    
        if (result.isConfirmed) {
            localStorage.setItem(`examResult_${slug}`, JSON.stringify(resultExam)); 
            localStorage.setItem(`result_${slug}`, JSON.stringify(dataExam[keyInObj]));       
            router.replace(`/exam/result?q=${slug}`);
        }
      };

    return (
        <div className='minHeight space-y-6'>
            {/* button */}
            <div className='flex justify-center'>
                <div className='md:w-1/2 w-full mx-auto inline-flex justify-between'>
                    <div 
                        className='inline-flex justify-center py-2 items-center bg-primary-light text-[#fff] text-xl font-semibold rounded-2xl w-[8rem]'
                        onClick={() => handlePrevious()}
                    > Previous </div>
                    <div 
                        className='inline-flex justify-center py-2 items-center bg-primary-light text-[#fff] text-xl font-semibold rounded-2xl w-[8rem]'
                        onClick={() => handleNext()}
                    > Next </div>            
                </div>
            </div>
            {/* list */}
            <div className='grid md:gid-cols-2 grid-cols-1 gap-6 min-h-[60vh]'>
                {
                    listQuizs.map(quiz => {
                        return (
                            <div key={quiz.id}>
                                <QuizQuestion question={quiz} pos={quiz.id} fnAddAnswer={handleAddAnswer} fnCheckAnswer={handleCheckAnswer}/>
                            </div>
                        )
                    })
                }
            </div>
            {/* submit */}
            <div className='text-right mt-3'>
                <div 
                    className='inline-flex justify-center py-2 items-center bg-primary-light text-[#fff] text-xl font-semibold rounded-2xl w-[8rem]'
                    onClick={() => handleSubmit()}
                > Submit </div>
            </div>
        </div>
    )
}

export default Page