
const questions_group_A = [
  {
    id: '001',
    title: 'Personnes à assurer',
    questions: [{ id: '011', question: 'Un adulte + enfant(s)', answer: '' }],
  },
  {
    id: '002',
    title: 'Niveau de remboursement',
    questions: [
      { id: '021', question: 'Optique:', answer: 'Fort et *fort*' },
      { id: '022', question: 'Dentaire:', answer: 'Fort' },
      { id: '023', question: 'Soins médicaux:', answer: 'Moyen' },
      { id: '024', question: 'Soins hospitaliers:', answer: 'Moyen' },
    ],
  },
]
const questions_group_B = [
  {
    id: '004',
    title: 'Personnes à assurer',
    questions: [{ id: '041', question: 'Un adulte + enfant(s)', answer: '' }],
  },
  {
    id: '005',
    title: 'Niveau de remboursement',
    questions: [
      { id: '051', question: 'Optique:', answer: 'Fort' },
      { id: '052', question: 'Dentaire:', answer: 'Fort' },
      { id: '053', question: 'Soins médicaux:', answer: 'Moyen' },
      { id: '054', question: 'Soins hospitaliers:', answer: 'Moyen' },
    ],
  },
]
const questions_group_C = [
  {
    id: `003`,
    title: `Date dassurance envisagée`,
    questions: [{ id: '031', question: '01/12/2020', answer: '' }],
  },
]
/** export questions */
const questions = [
  ...questions_group_A,
  ...questions_group_B,
  ...questions_group_C
];
/** export groupItem */
const groupItem = {
    questions,
    title: 'Assuré #1',
    sequence: 1,
}
/** export groupList */
const groupList = [{
    questions: questions_group_A,
    title: 'Assuré #1',
    sequence: 1,
},{
    questions: questions_group_B,
    title: 'Assuré #2',
    sequence: 2,
},{
    questions: questions_group_C,
    title: 'Informations',
    sequence: 3,
}]

const title = 'Group title';

export { questions, groupItem, groupList, title }