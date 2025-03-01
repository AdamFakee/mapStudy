export interface Course {
    // có thể chỉ lấy mỗi khóa học mà không cần đến teacher 
    teacherId?: number,
    teacherName?: string, 
    teacherThubnail?: string,
    courseThumbnail: string,
    courseName: string,
    courseId: number
}

export interface Category {
    id: number,
    name: string
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
