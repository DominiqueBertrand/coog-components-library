// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.
import { groupList } from "./Group/Group.service";

const summaryList = [
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
  {
    id: `003`,
    title: `Date dassurance envisagée`,
    questions: [{ id: '031', question: '01/12/2020', answer: '' }],
  },
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
];

export { groupList, summaryList };