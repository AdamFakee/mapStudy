export enum ActionChapterType {
    COMMENT = 'comment',
    COURSE = 'course'
}
export const ActionChapterStateValue = {
    COURSE : 1,
    COMMENT : 2
}
export interface ActionChapterReducerType {
    type: ActionChapterType;
}

export function changeNavBarChapter ( state: number, action: ActionChapterReducerType) {
    const { type } = action;
    switch ( type ) {
        case ActionChapterType.COMMENT: {
            return ActionChapterStateValue.COMMENT
        }
        case ActionChapterType.COURSE: {
            return ActionChapterStateValue.COURSE
        }
        default:
            return state;
    }
 
}