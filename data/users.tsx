type User = {
  displayName: string;
  handle: string;
  profilePic: string;
  followers: number;
  flames: number;
  bio: string;
  uid: number;
};

const users: User[] = [
  {
    displayName: 'Tanuj D',
    handle: '@tjd',
    profilePic:
      'https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/244305674_1199851353874099_7498215930166384149_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=hB9YE6db7AIAX_HgwSF&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCpwZNohvZhEMUcJuq0ytfmPCui_c-jViJc7cmjZ8AYew&oe=64058AA8&_nc_sid=8fd12b',
    followers: 236,
    flames: 534,
    bio: 'Hi! My name is Tanuj Dunthuluri. Currently, a second year Computer Science student at Georgia Tech, I am passionate about local politics and I want to get involved!',
    uid: 1,
  },
  {
    displayName: 'Srikar Parsi',
    handle: '@sparsi',
    profilePic:
      'data:image/jpeg;base64,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',
    followers: 1253,
    flames: 2650,
    bio: "Hi! My name is Srikar Parsi. I've been involved in politics for my whole life. I want to make a difference!",
    uid: 2,
  },
  {
    displayName: 'Rishi Bengani',
    handle: '@rbengani',
    profilePic:
      'https://media.licdn.com/dms/image/C4E03AQEcGRPRVQzrrw/profile-displayphoto-shrink_800_800/0/1632757524392?e=2147483647&v=beta&t=tkJ9Y4d2xgNu-gJSjby8Mbf1vqQmhn4siUe_Gm-KsT4',
    followers: 29543,
    flames: 26502,
    bio: "Hi! My name is Rishi Bengani. I'm an aspiring politician, planning on running for Governer of Kansas!",
    uid: 3,
  },
];

export default users;
