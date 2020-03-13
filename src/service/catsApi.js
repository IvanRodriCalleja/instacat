const sukiicat = {
  name: "sukiicat",
  photo: "./sukiicat/photo.jpg",
  profileImage: "./sukiicat/profile.jpg"
};

const albertbabycat = {
  name: "albertbabycat",
  photo: "./albertbabycat/photo.jpg",
  profileImage: "./albertbabycat/profile.jpg"
};

const smoothiethecat = {
  name: "smoothiethecat",
  photo: "./smoothiethecat/photo.jpg",
  profileImage: "./smoothiethecat/profile.jpg"
};

const realgrumpycat = {
  name: "realgrumpycat",
  photo: "./realgrumpycat/photo.jpg",
  profileImage: "./realgrumpycat/profile.jpg"
};

const cats = [sukiicat, albertbabycat, smoothiethecat, realgrumpycat];

const catsSearch = { sukiicat, albertbabycat, smoothiethecat, realgrumpycat };

export const fetchCats = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(cats);
    }, 1000);
  });

export const fetchCatsError = () =>
  new Promise((_, reject) => {
    setTimeout(() => {
      reject({ status: 500, message: "Error in the server" });
    }, 1000);
  });

export const searchCats = search =>
  new Promise(resolve => {
    const responseTime = Math.random() * 3 * 1000;

    setTimeout(() => {
      resolve(search ? [catsSearch[search]] : cats);
    }, responseTime);
  });

export const fetchCat = ({ id }) =>
  new Promise(resolve => {
    const responseTime = Math.random() * 3 * 1000;

    setTimeout(() => {
      resolve(cats[id]);
    }, responseTime);
  });
