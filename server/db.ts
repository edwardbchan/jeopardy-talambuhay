import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'Which book series has quidditch?',
        answer: 'Harry Potter',
    },
    {
        points: 200,
        question:
            'What is the name of a cubic puzzle named after its inventor?',
        imgSrc: "",
        answer: 'Rubik\'s Cube',
    },
    {
        points: 300,
        question:
            'What Ivy League school has the highest Native American enrollment (a whoppping 1%)?',
        answer: 'Dartmouth',
    },
    {
        points: 400,
        question: 'Which Valve video game features the character gladOS?',
        answer: 'Portal',
    }
]);
const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 200,
            question:
                'What sport was called "The Creators Game" by the Native Americans?',
            answer: 'Lacrosse',
        },
        {
            points: 100,
            question:
                'What musician released the album If You\'re Reading This It\'s Too Late?',
            answer: 'Drake',
        },
        {
            points: 300,
            question: '?',
            answer: '',
        },
        {
            points: 400,
            question:
                'Who composed the piano piece Arabesque No. 1 in E major, Op. 18?',
            answer: 'Claude Debussy',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'Which East Asian country includes 14,125 islands?',
        imgSrc: "",
        answer: 'Japan',
    }
]);


const categories = [
    {
        title: 'My Past',
        questions: pastQuestions
    },
    {
        title: 'My Present',
        questions: presentQuestions
    },
    {
        title: 'My Future',
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}