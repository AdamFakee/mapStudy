export interface Course {
    id: string,
    owner: string, 
    thumbnail: string,
    title: string,
    class: string
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