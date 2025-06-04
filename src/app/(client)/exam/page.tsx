'use client'
import { Bar } from '@/components/user/exam/Bar';
import Pagination from '@/components/user/Pagination';
import Link from 'next/link';
import React from 'react';
import data from '@/data/exam.json';
import { useSearchParams } from 'next/navigation';
function Page() {
  // fix cứng 15 đề và limit = 10 
  const totalResults = 15;
  const limit = 10;
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || '1';
  const skip = (parseInt(page) - 1) * limit;
  const totalExam = Object.keys(data);
  const results = Array.from({ length: skip === 0 ? limit : totalExam.length - skip }, (_, index) => index + skip + 1); // Tạo mảng [1 + skip, 2 + skip, ...]
  return (
    <div className="p-5 minHeight">
        {/* Tiêu đề hiển thị số lượng kết quả */}
        <div className="mb-4">
            <h3 className="text-lg font-semibold">
            1-{limit} của {totalResults} kết quả
            </h3>
        </div>

        {/* Danh sách kết quả */}
        <div className="flex flex-col gap-4">
            {results.map((result, index) => (
                <Link key={index} href={`/exam/${result}`}>
                    <Bar pos={result}/>
                </Link>
            ))}
        </div>
        {/* phân trang */}
        <div>
            <Pagination totalPage={2}/>
        </div>
    </div>
  );
}

export default Page;