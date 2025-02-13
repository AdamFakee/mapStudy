
export enum ActionType {
    ADD = "add",
    DELETE = "delete",
    RESET = 'reset'
}

export type FilterCoursesType = number
export interface ActionCoursesReducerType {
    type: ActionType;
    id?: FilterCoursesType;
}


export function filterCourses (state: FilterCoursesType[], action: ActionCoursesReducerType) {
    const { type, id } = action;
    switch ( type ) {
        case ActionType.ADD: {
            if(!id) return state;
            return [...state, id]
        }
        case ActionType.DELETE: {
            if(!id) return state;
            return state.filter( item => item !== id);
        }
        case ActionType.RESET: {
            return [];
        }
        default: throw new Error(`invalid type ${type}`)
    }
}