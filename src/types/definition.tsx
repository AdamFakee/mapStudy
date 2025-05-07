export interface Course {
    // có thể chỉ lấy mỗi khóa học mà không cần đến teacher 
    teacherId?: number,
    teacherName?: string, 
    teacherThubnail?: string,
    courseThumbnail: string,
    courseName: string,
    courseId: number
}

export interface CourseAdmin {
    id: number;
    name: string;
    thumbnail: string;
    teacher_id?: number;
    teacherName?: string;
    teacherThumbnail?: string;
    category_id: number;
    class_id: number;
    description: string;
    isHot: boolean;
    isNew: boolean;
    price: string;
    status: string;
    subject_id: number;
}


export interface CourseAdminUpdate {
    name: string;
    category_id: number;
    class_id: number;
    description: string;
    price: string;
    subject_id: number;
}


export interface Category {
    id: number,
    name: string
}

export interface Class {
    id: number,
    name: string
}

export interface LessonUpdate {
    chapter_id: number,
    title: string,
    video_link: string,
    position: number
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

export interface Chapter {
    id: number,
    title: string
}

export interface ChapterUpdate {
    course_id: number,
    title: string,
    description: string,
    position: number,
}

export interface SubjectAdmin {
    id: number,
    name: string;
}

export interface Subject {
    id: number,
    title: string
}

export interface User {
    email: string,
    isLogin: boolean
}

export interface Tokens {
    accessToken: string;
    refreshToken: string;
}

export interface AuthContextData {
    user: User | null,
    setUser: (user: User) => void,
    isLoading: boolean,
    handleLogin: ({ email, tokens }: { email: string, tokens: Tokens}) => Promise<void>;
    handleLogout: () => Promise<void>;
    handleGetToken: (key: string) => Promise<string>;
}

export interface AuthAdminContextData {
    user: User | null,
    setUser: (user: User) => void,
    isLoading: boolean,
    handleLogin: ({ email, tokens }: { email: string, tokens: Tokens}) => void;
    handleLogout: () => Promise<void>;
}

export interface Question {
    id: number;
    title: string;
    A: string;
    B: string;
    C: string;
    D: string;
    result: "A" | "B" | "C" | "D";}
export interface Quiz {
    title: string;
    questions: Question[];
}