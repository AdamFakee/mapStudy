import Frame from '@/components/user/home/Frame';
import LeftBar from '@/components/user/home/LeftBar';
import ListCourses from '@/components/user/home/ListCourses';
import ListTeachers from '@/components/user/home/ListTeachers';
import RightBar from '@/components/user/home/RightBar';
import SearchCategories from '@/components/user/home/header/SearchCategories';
import dataCategory from '@/data/searchCategory.json'

export default function Page() {
  return (
    <div className='flex justify-between gap-6'>
      <LeftBar/>
      <div className='xl:mr-0 lg:-mr-[24px] flex-1 overflow-y-auto scroll-y-hidden space-y-10'  style={{ maxHeight: "calc(-56px + 100vh)"}}>
        <Frame>
          <SearchCategories data={dataCategory} />
        </Frame>

        <Frame>
          <ListTeachers/>
        </Frame>

        <Frame>
          <ListCourses isHot={true} isNew={false} title="khóa học hot" />
        </Frame>

        <Frame>
          <ListCourses isHot={false} isNew={true} title="khóa học mới nhất" />
        </Frame>
      </div>
      <RightBar/>
    </div>
  )
}