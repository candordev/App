type Comment = {
    description: string;
    posterUID: number;
    parentUID: number;
    likes: string;
    dislikes: string;
    ago: string;
    uid: number;
  };

  const comments: Comment[] = [
    {
      description: "Just read an article about qualified immunity and how it shields police officers from accountability. This needs to change.",
      posterUID: 2,
      parentUID: 1,
      likes: '4',
      dislikes: '1',
      ago: '3 hours',
      uid: -1,
    },
    {
        description: "But it also allows officers to get away with using excessive force or violating people's rights. They should be held accountable like everyone else.",
        posterUID: 1,
        parentUID: -1,
        likes: '3',
        dislikes: '2',
        ago: '2 hours',
        uid: -2,
      },
      {
        description: "Reponse to response...",
        posterUID: 3,
        parentUID: -2,
        likes: '0',
        dislikes: '1',
        ago: '40 min',
        uid: -3,
      },
      {
        description: "Tanuj, you have excellent opinions! I think you should run.",
        posterUID: 3,
        parentUID: 1,
        likes: '23',
        dislikes: '0',
        ago: '6 hours',
        uid: -4,
      },
      {
        description: "I agree with this",
        posterUID: 3,
        parentUID: 2,
        likes: '2',
        dislikes: '1',
        ago: '3 hours',
        uid: -5,
      },
  ];

  export default comments;
