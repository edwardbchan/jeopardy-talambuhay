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
        question: 'What is the name of the smaller sail on the front of a boat?',
        answer: 'Jib',
    },
    {
        points: 400,
        question: 'What sandwich is known for being a pregame snack of the Golden State Warriors?',
        answer: 'Peanut Butter and Jelly',
    }
]);
const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 200,
            question:
                'What sport was called "The Creators Game" by Native Americans?',
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
            question: 'Which NBA player is the Slim Reaper?',
            answer: 'Kevin Durant',
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
            'Which country is known for its cherry blossom trees?',
        imgSrc: "",
        answer: 'Japan',
    }
    {
            points: 100,
            question:
                'What country is known for its cherry blossom trees?',
            answer: 'Japan',
        }
          {
            points: 400,
            question:
                'What New York university has a lion as its mascot?',
            answer: 'Columbia',
        }
        {
            points: 400,
            question:
                '',
            answer: '',
        }
         {
            points: 400,
            question:
                '',
            answer: '',
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