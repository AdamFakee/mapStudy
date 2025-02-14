import React from 'react'
import Banner from './Banner'
import ListExam from './ListExam'

function LeftBar() {
    return (
        <div className='space-y-6'>
            <Banner thumbnail='https://mapstudy.sgp1.digitaloceanspaces.com/course/1ad094300xuc/khoa-luyen-de-toan-dien-tieng-anh-12-1737379936620.jpg' title='KHOÁ LUYỆN ĐỀ CHUYÊN SÂU TIẾNG ANH 12'/>
            <div className='space-y-3 bg-[#f3f4f5]'>
                <ListExam/>
                <ListExam/>
                <ListExam/>
            </div>
        </div>
    )
}

export default LeftBar