export type Profile = {
  name: string;
  email: string;
  imageUrl: string;
};

export type Album = {
  id: number;
  userId: number;
  title: string;
};

export type Photo = {
  id: number;
  url: string;
  title: string;
  thumbnailUrl: string;
};
