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
        question: 'What is the front of a boat called?',
        answer: 'Bow',
    },
    {
        points: 400,
        question: 'What sandwich is known for being a pregame snack of the Golden State Warriors?',
        imgSrc: "https://cdn.barstoolsports.com/wp-content/uploads/2016/02/03/pbjsteph.gif",
        answer: 'Peanut Butter and Jelly',
    }
]);
const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 100,
            question:
                'What sport was called "The Creators Game" by Native Americans?',
            answer: 'Lacrosse',
        },
        {
            points: 200,
            question:
                'What musician released the album If You\'re Reading This It\'s Too Late?',
            imgSrc: "/static/IYRTITL.png",
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
        imgSrc: "https://www.redsavannah.com/-/media/countries/japan/japan-cherry-blossom-park-istock.jpg?h=800&w=750&udi=1&cropregion=51,0,1046,1062&hash=D20B9E3A2EED835AA28E87A4B6916D08",
        answer: 'Japan',
    },
 {
            points: 200,
            question:
                'What New York university has a lion as its mascot?',
            answer: 'Columbia',
        },
        {
            points: 300,
            question:
                'What is someone who studies the brain? ',
            answer: 'Neurologist',
        },
         {
            points: 400,
            question:
                'What language is "quid pro quo" from?',
            answer: 'Latin',
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