type Group = {
  name: string;
  pic: string;
};

const groups: Group[] = [
  {
    name: 'Kansas',
    pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Kansas_%281925%E2%80%931927%29.svg/223px-Flag_of_Kansas_%281925%E2%80%931927%29.svg.png',
  },
  {
    name: 'Federal',
    pic: 'data:image/jpeg;base64,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',
  },
  {
    name: 'Downingtown',
    pic: 'https://www.hillsboroughschools.org/cms/lib/FL50000635/Centricity/Domain/201/crest.jpg'
  },
];

export default groups;