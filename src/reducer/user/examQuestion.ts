export enum ExamQuestionType {
    CHANGE = 'change',
}
export interface ExamQuestionState {
    [id: number]: string
}
export interface ExamQuestionReducerType {
    type: ExamQuestionType;
    value: {
        id: number;
        answer: string;
    }
}

export function examQuestion ( state: ExamQuestionState, action: ExamQuestionReducerType) {
    const { type } = action;
    switch (type) {
        case ExamQuestionType.CHANGE: {
            const { id, answer } = action.value;
            state[id] = answer;
            return {...state};
        }
        default:
            return state;
    }
}