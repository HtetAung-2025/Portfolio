import { resume } from "react-dom/server";

export const PERSONAL_INFO = {
    name: 'Htet Aung',
    title: 'UI 開発者 Frontend Engineer',
    email: '25aw0126@jec.ac.jp',
    location: 'Tokyo,JP',
    tagline: 'Building seamless web experiences',
    bio: [
        "私の名前はテッ アウンと申します。ミャンマー出身の2002年生まれです。音楽と語学、そしてハンバーガーとブドウが大好きです。周囲からは、柔軟性とコミュニケーション能力の高さを評価していただいています。",
        "ユーザーに寄り添った、温かみのあるデジタル体験を提供することを大切にしています。現在はReactを主軸に、デザインの意図を論理的に実装するスキルを磨いています。最新のWeb標準を意識した、誰もが使いやすく心に残るプロダクトを開発できる人材を目指しています。" 
    ]
};

export const SOCIAL_LINKS = {
    github: 'https://github.com/HtetAung-2025'
};

export const STATS = [
    { label: '経験年数', value: 0 },
    { label: '作った作品', value: 5 },
    { label: '技術力', value: 70 },
    { label: 'クライントの満足度', value: 80 }
];

export const NAV_LINKS = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
]