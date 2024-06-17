import { color } from 'framer-motion'
import h1 from './assets/h1.png'
import h2 from './assets/h2.png'
import h3 from './assets/h3.png'

import p1 from './assets/p1.png'
import p2 from './assets/p2.png'
import p3 from './assets/p3.png'
import p4 from './assets/p4.png'


export const flex = 'flex items-center'

export const posts = [
    {
       
        hImage: h1,
        dp: p1,
        tag: '✍️ Article',
        title: 'What if famous brands had regular fonts? Meet RegulaBrands!',
        para: "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
        author: 'Sarthak Kamra'
    },
    {
        
        hImage: h2,
        dp: p2,
        tag: '🔬️ Education',
        title: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
        para: "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
        author: 'Sarah West'
    },
]

export const postings = [
    {
        tag: '🗓️ Meetup',
        hImage: h3,
        color: '#E56135',
        dp: p3,
        title: 'Finance & Investment Elite Social Mixer @Lujiazui',
        date: 'Fri, 12 Oct, 2018',
        location: 'Ahmedabad, India',
        author: 'Ronal Jones',
        btn: 'Visit Website',
    },
    {
        tag: '💼️ Job',
        hImage: null,
        color: '#02B875',
        dp: p4,
        title: 'Software Developer',
        company: 'Innovaccer Analytics Private Ltd',
        location: 'Noida, India',
        btn: 'Apply on Timesjobs',
        author: 'Joseph Gray'
    },
]

export const inp = 'text-[#8A8A8A] border-t-0 px-2 py-2 border-[1px] border-[#ADB5BD] outline-none bg-[#F1F3F5]'