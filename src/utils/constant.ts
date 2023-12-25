import { MemberArrayType } from './type';

export const Part = {
  frontend: '프론트엔드',
  backend: '백엔드',
};
export const Team = {
  sharemind: '셰어마인드',
  localmood: '로컬무드',
  reddy: '레디',
  sniff: '스니프',
  gotcha: 'GOTCHA',
};
export const FEMember: MemberArrayType = [
  { name: '김지원', team: '로컬무드' },
  { name: '김현민', team: '로컬무드' },
  { name: '노이진', team: 'Redigg' },
  { name: '신동현', team: 'Redigg' },
  { name: '송지석', team: 'SNIFF' },
  { name: '오대균', team: 'SNIFF' },
  { name: '이규호', team: '셰어마인드' },
  { name: '정인영', team: '셰어마인드' },
  { name: '이은비', team: 'GOTCHA' },
  { name: '변지혜', team: 'GOTCHA' },
];
export const BEMember: MemberArrayType = [
  { name: '이소현', team: '셰어마인드' },
  { name: '이유정', team: '셰어마인드' },
  { name: '김경민', team: '로컬무드' },
  { name: '최예원', team: '로컬무드' },
  { name: '이영교', team: 'Redigg' },
  { name: '최현수', team: 'Redigg' },
  { name: '이윤서', team: 'SNIFF' },
  { name: '조윤주', team: 'SNIFF' },
  { name: '이윤정', team: 'GOTCHA' },
  { name: '이종미', team: 'GOTCHA' },
];

export const HeaderHeight = '4.375rem';
//button colors
export const ButtonColors = {
  active: '#3172ea',
  inactive: '#cccccc',
};

export const ButtonFontColors = {
  active: '#ffffff',
  inactive: '#999999',
};

//input colors
export const InputColors = {
  active: '#3172ea',
  default: '#cccccc',
  inactive: '#f2f2f2',
  error: '#db4242',
};

export const BgColors = {
  active: '#f7f7f7',
  default: '#ffffff',
  inactive: '#f2f2f2',
  error: '#fbefef',
};

export const InputFontColors = {
  active: '#101010',
  default: '#101010',
  inactive: '#b3b3b3',
  error: '#101010',
};
