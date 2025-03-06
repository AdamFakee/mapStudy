'use client'
import { Loading } from '@/components/user/AccessAlter';
import QuestionResult from '@/components/user/exam/QuizResult';
import { Question } from '@/types/definition';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react'

function Page() {
  
  const searchParams = useSearchParams();
  const q = searchParams.get('q');
  // check window đã load xong chưa 
  if (typeof window === "undefined") {
    return <Loading/>
  }
  // lấy data từ local storage 
  const dataLocal = window.localStorage.getItem(`examResult_${q}`);
  const resultDataLocal = window.localStorage.getItem(`result_${q}`);
  if (!dataLocal || !resultDataLocal) {
    return (
      <div className='fixedHeight flex flex-col gap-3 justify-center items-center'>
        <div className='text-center'>Chưa có kết quả thi nào</div>
          <div className='text-center'>
            <Link href='/' className='px-4 py-2 rounded-md bg-primary text-white font-semibold'>
              Quay lại trang chủ
            </Link>
          </div>
      </div>
    )
  }

  // chuyển thành json 
  const resultExam = JSON.parse(dataLocal);
  const resultQuiz: Question[] = JSON.parse(resultDataLocal);

  // tính score 
  const score = resultQuiz.reduce((total, element) => {
    const answer = resultExam[element.id] || null;
    const isRight = answer === element.result;
    return isRight ? total + 1 : total;
  }, 0);
  return (
    <div className='minHeight space-y-4'>
      <div 
        className='text-center space-y-3 sticky top-[56px] backdrop-blur-md'
      >
        <div className='text-primary font-medium text-2xl'>KẾT QUẢ BÀI THI</div>
        <div className='text-red-500 font-semibold text-xl'>TỔNG ĐIỂM: {score}/50</div>
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-3 md:mx-10 overflow-y-auto'>
        {resultQuiz.map((element, index) => {
          const answer = resultExam[element.id] || null;
          return (
            <QuestionResult
              key={element.id} 
              pos={index + 1}
              answer={answer}
              question={element}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Page