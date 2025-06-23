'use client'
import { MustBeByCourse } from "@/components/user/AccessAlter";
import { BodyChapter } from "@/components/user/courses/chapter/BodyChapter"
import HeaderChapter from "@/components/user/courses/chapter/HeaderChapter"
import { useAuthContext } from "@/contexts/AuthContext"

function Page() {
  const {  user } = useAuthContext();

   
  
  return (
    <div className="w-full fixedHeight">
      {
        user?.isLogin ? (
          <>
            <HeaderChapter/>
            <BodyChapter/>
          </>
        ) : <MustBeByCourse title='Bạn cần đăng nhập để tiếp tục' subTitle="Đăng nhập ngay" linkTo="/login"/>

      }
    </div>
  )
}

export default Page