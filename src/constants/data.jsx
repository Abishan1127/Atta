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

import service1 from '../assets/images/service-1.jpg';
import service2 from '../assets/images/service-2.jpg';
import service3 from '../assets/images/service-3.jpg';
import service4 from '../assets/images/service-4.jpg';

import explore1 from '../assets/images/explore-1.jpg';
import explore2 from '../assets/images/explore-2.jpg';
import explore3 from '../assets/images/explore-3.jpg';
import explore4 from '../assets/images/explore-4.jpg';
import explore5 from '../assets/images/explore-5.jpg';
import explore6 from '../assets/images/explore-6.jpg';


import Icon from '../assets/images/icon-1.png';
import Downbg from '../assets/images/downbg.jpg';



export const slides = [
  {
    image: hero1,
    title: "My City",
    subtitle: "My Responsibility",
    description: "Righteous indignation and dislike men who are so beguiled & demoralized."
  },
  {
    image: hero2,
    title: "Clean & Green",
    subtitle: "Our Collective Duty",
    description: "Pleasures to secure other greater pleasures avoid pain produce resultant."
  },
  {
    image: hero3,
    title: "Future Ready",
    subtitle: "Smart Living",
    description: "Undertakes laborious physical exercise obtain advantage from it."
  }
];


export const teamMembers = [
  { 
    name: 'Elvina Julies', 
    title: 'Actuary', 
    image: member1, 
    email: 'elvina@example.com', 
    phone: '+61412345678'
  },
  { 
    name: 'Hermans Gordon', 
    title: 'Director', 
    image: member2, 
    email: 'hermans@example.com', 
    phone: '+61498765432'
  },
  { 
    name: 'Marian Lenoras', 
    title: 'Speaker', 
    image: member3, 
    email: 'marian@example.com', 
    phone: '+61411223344'
  },
  { 
    name: 'Bertram Irvin', 
    title: 'Speaker', 
    image: member4, 
    email: 'bertram@example.com', 
    phone: '+61455667788'
  },
  { 
    name: 'Nathan Cruz', 
    title: 'Coordinator', 
    image: member5, 
    email: 'nathan@example.com', 
    phone: '+61466778899'
  },
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
      { name: "Medina Rivers", active: false },
      { name: "Denman Estate Park1", active: true },
      { name: "Acequia Park.", active: false },
      { name: "Bracken Bat Flight", active: false },
      { name: "Medina River", active: false },
      { name: "Denman Estate Park.", active: true },
      { name: "Acequia Park..", active: false },
      { name: "Bracken Bat Flight,.", active: false }
    ]
  },
  {
    title: "Towns & Cities",
    content: [
      { name: "Medina Riverss", active: false },
      { name: "Denman Estate Park", active: true },
      { name: "Acequia Park1", active: false },
      { name: "Bracken Bat Flight.,", active: false },
      { name: "Medina River.", active: false },
      { name: "Denman Estate Park..", active: true },
      { name: "Acequia Park2", active: false },
      { name: "Bracken Bat Flight,,", active: false }
    ]
  },
  {
    title: "Arts & Culture Areas",
    content: [
      { name: "Medina River..", active: false },
      { name: "Denman Estate Park,", active: true },
      { name: "Acequia Park3", active: false },
      { name: "Bracken Bat Flight,", active: false },
      { name: "Medina River,", active: false },
      { name: "Denman Estate Park", active: true },
      { name: "Acequia Park", active: false },
      { name: "Bracken Bat Flight..", active: false }
    ]
  },
  {
    title: "Beach Areas",
    content: [
      { name: "Medina River'", active: false },
      { name: "Denman Estate Park", active: true },
      { name: "Acequia Park4", active: false },
      { name: "Bracken Bat Flight", active: false },
      { name: "Medina River,.", active: false },
      { name: "Denman Estate Park,,", active: true },
      { name: "Acequia Park5", active: false },
      { name: "Bracken Bat Flight.", active: false }
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

export const services = [
  {
    title: "Garbage & Recycling",
    category: "Request",
    icon: "bi-building",
    image: service1,
  },
  {
    title: "Public Parks",
    category: "Visit",
    icon: "bi-building",
    image: service2,
  },
  {
    title: "Water & Sewer",
    category: "Manage",
    icon: "bi-building",
    image: service3,
  },
  {
    title: "Building Permits",
    category: "Apply",
    icon: "bi-building",
    image: service4,
  }
];
export const departmentsData = [
  {
    image: explore1,
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    title: "Land & Housing\nDepartment",
    para: "Righteous indignion & dislike men who are so beguiled demoralized by charms pleasure the moment "
  },
  {
    image: explore2,
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135807.png",
    title: "School & College\nDepartment",
    para: "Righteous indignion & dislike men who are so beguiled demoralized by charms pleasure the moment "
  },
  {
    image: explore3,
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
    title: "Policing & Crime\nDepartment",
    para: "Righteous indignion & dislike men who are so beguiled demoralized by charms pleasure the moment "
  },
  {
    image: explore4,
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
    title: "Policing & Crime\nDepartment",
    para: "Righteous indignion & dislike men who are so beguiled demoralized by charms pleasure the moment "
  },
  {
    image: explore5,
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    title: "Land & Housing\nDepartment",
    para: "Righteous indignion & dislike men who are so beguiled demoralized by charms pleasure the moment "
  },
  {
    image: explore6,
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135807.png",
    title: "School & College\nDepartment",
    para: "Righteous indignion & dislike men who are so beguiled demoralized by charms pleasure the moment "
  },
];

export const aboutData = [
  {
    id: 1,
    heading: "Major Voice of City Government, San Antonio",
    subheading: "From “The Earliest City”",
    description:
      "Righteous indignion & dislike men who are so beguiled demoralized by charms pleasure the moment so blinded by desires that they cannot foresee to bound.",
    points: [
      "Administrative Practices",
      "Carry out the Duties",
      "Develop the Municipality",
      "Maintain Financial Integrity",
      "Represent the Public",
    ],
  },
  {
    id: 2,
    heading: "City Planning and Sustainability",
    subheading: "Building for Future Generations",
    description:
      "We believe in urban infrastructure that supports environmental and economic sustainability through long-term strategic goals.",
    points: [
      "Smart Infrastructure",
      "Green Public Spaces",
      "Public Transportation Access",
      "Zoning Innovation",
    ],
  },
  {
    id: 3,
    heading: "Public Health and Safety Initiatives",
    subheading: "Protecting Our Communities",
    description:
      "Health and safety are the backbone of thriving cities. Our mission is to ensure equal access to clean air, healthcare, and emergency response.",
    points: [
      "Emergency Services Access",
      "Pandemic Response",
      "Clean Water Projects",
      "Mental Health Resources",
    ],
  },
  {
    id: 4,
    heading: "Economic Empowerment for Citizens",
    subheading: "Enabling Inclusive Growth",
    description:
      "From small business incentives to job training programs, we aim to empower every citizen economically through fair opportunity.",
    points: [
      "Workforce Training",
      "Startup Grants",
      "Community Markets",
      "Fair Employment",
    ],
  },
];






export const iconImage = Icon;
export const downbg = Downbg;
export const image=Image
