// src/constants/data.jsx

import hero1 from '../assets/images/hero1.jpg';
import hero2 from '../assets/images/hero2.jpg';
import hero3 from '../assets/images/hero3.jpg';

import member1 from '../assets/images/member1.jpg';
import member2 from '../assets/images/member2.jpg';
import member3 from '../assets/images/member3.jpg';
import member4 from '../assets/images/member4.jpg';
import member5 from '../assets/images/member5.jpg';

import news1 from '../assets/images/news1.jpg';
import news2 from '../assets/images/news2.jpg';
import news3 from '../assets/images/news3.jpg';

import Icon from '../assets/images/icon-1.png';
import Downbg from '../assets/images/downbg.jpg'

export const slides = [hero1, hero2, hero3];

export const teamMembers = [
  { name: 'Elvina Julies', title: 'Actuary', image: member1 },
  { name: 'Hermans Gordon', title: 'Director', image: member2 },
  { name: 'Marian Lenoras', title: 'Speaker', image: member3 },
  { name: 'Bertram Irvin', title: 'Speaker', image: member4 },
  { name: 'Nathan Cruz', title: 'Coordinator', image: member5 },
];

export const downloadSlides = [
  {
    icon: "bi-house-fill",
    smallText: "Thinking of Living in San Antonio City?",
    bigText: "Everyone should Live in Smart City at Least Once"
  },
  {
    icon: "bi-building",
    smallText: "Thinking of Living in San Antonio City?",
    bigText: "Everyone should Live in Smart City at Least Once"
  },
  {
    icon: "bi-tree-fill",
    smallText: "Thinking of Living in San Antonio City?",
    bigText: "Everyone should Live in Smart City at Least Once"
  }
];

export const files = [
  { title: "Tax_Paid_Challan", description: "Download the Challan Details file" },
  { title: "Tender_Schedules", description: "Download Your List at Free of Cost" },
  { title: "New_License_Forms", description: "We Offer Inner City Career Opportunities" },
  { title: "New_License_Forms", description: "Latest License Applications for Citizens" },
  { title: "Annual_Budget_Report", description: "Detailed City Budget for Fiscal Year" },
  { title: "New_License_Forms", description: "View the Updated Collection Routes" },
];

export const accordionData = [
  {
    title: "Natural Areas",
    content: [
      { name: "Medina River", active: false },
      { name: "Denman Estate Park", active: true },
      { name: "Acequia Park", active: false },
      { name: "Bracken Bat Flight", active: false },
      { name: "Medina River", active: false },
      { name: "Denman Estate Park", active: true },
      { name: "Acequia Park", active: false },
      { name: "Bracken Bat Flight", active: false }
    ]
  },
  {
    title: "Towns & Cities",
    content: [
      { name: "Medina River", active: false },
      { name: "Denman Estate Park", active: true },
      { name: "Acequia Park", active: false },
      { name: "Bracken Bat Flight", active: false },
      { name: "Medina River", active: false },
      { name: "Denman Estate Park", active: true },
      { name: "Acequia Park", active: false },
      { name: "Bracken Bat Flight", active: false }
    ]
  },
  {
    title: "Arts & Culture Areas",
    content: [
      { name: "Medina River", active: false },
      { name: "Denman Estate Park", active: true },
      { name: "Acequia Park", active: false },
      { name: "Bracken Bat Flight", active: false },
      { name: "Medina River", active: false },
      { name: "Denman Estate Park", active: true },
      { name: "Acequia Park", active: false },
      { name: "Bracken Bat Flight", active: false }
    ]
  },
  {
    title: "Beach Areas",
    content: [
      { name: "Medina River", active: false },
      { name: "Denman Estate Park", active: true },
      { name: "Acequia Park", active: false },
      { name: "Bracken Bat Flight", active: false },
      { name: "Medina River", active: false },
      { name: "Denman Estate Park", active: true },
      { name: "Acequia Park", active: false },
      { name: "Bracken Bat Flight", active: false }
    ]
  }
];

export const newsData = [
  {
    image: news1,
    date: '11',
    month: 'SEP’22',
    title: 'Supporting Local Businesses to Bounce Back',
    comments: 25,
  },
  {
    image: news2,
    date: '11',
    month: 'SEP’22',
    title: 'Supporting Local Businesses to Bounce Back',
    comments: 1,
  },
  {
    image: news3,
    date: '11',
    month: 'SEP’22',
    title: 'Supporting Local Businesses to Bounce Back',
    comments: 1,
  },
];

export const iconImage = Icon;
export const  downbg= Downbg;