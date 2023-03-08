type Post = {
    title: string;
    description: string;
    step: number;
    posterUID: number;
    raised: number;
    numComments: number;
    likes: string;
    dislikes: string;
    date: string,
    group: string,
    uid: number;
  };

  const posts: Post[] = [
    {
      title: 'Increase funding for public schools',
      description: 'Increasing school funding is essential to ensure that all students have access to high-quality education and the resources they need to succeed. Here are some reasons why:',
      step: 0,
      posterUID: 1,
      raised: 45.32,
      numComments: 1,
      likes: '2',
      dislikes: '1',
      date: 'Feb 24',
      group: '4th District',
      uid: 1,
    },
    {
      title: 'End Qualified Immunity',
      description: 'Online platforms have abused their immunity under Section 230 to allow harmful content to spread on their platforms, including hate speech, disinformation, and extremist content. Platforms like Facebook, Twitter, and YouTube have become too powerful and have failed to adequately moderate harmful content, leading to real-world harm.',
      step: 1,
      posterUID: 3,
      raised: 34050.32,
      numComments: 43,
      likes: '1.2k',
      dislikes: '200',
      date: 'Feb 29',
      group: 'Georgia',
      uid: 2,
    },
    {
      title: 'Repeal Section 230 of CDA',
      description: 'Qualified Immunity makes it difficult for victims of police misconduct to hold officers accountable for their actions, which can lead to a lack of trust in law enforcement and a breakdown in the relationship between police and the communities they serve.',
      step: 2,
      posterUID: 1,
      raised: 400.66,
      numComments: 4,
      likes: '45',
      dislikes: '3',
      date: 'March 1',
      group: 'Federal',
      uid: 3,
    },
  ];

  export default posts;
  export type {Post};
