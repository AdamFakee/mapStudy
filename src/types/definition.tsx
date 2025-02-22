export interface Course {
    teacherId: number,
    teacherName: string, 
    teacherThubnail: string,
    courseThumbnail: string,
    courseName: string,
    courseId: number
}

export interface Category {
    id: string,
    title: string
}

export interface New {
    id: number,
    thumbnail: string,
    title: string, 
    date: string
}

export interface BreakCrumTypes {
    href: string,
    title: string
}

export interface SelectOption {
    readonly value: string,
    readonly label: string
}

export interface Subject {
    id: number,
    title: string
  }