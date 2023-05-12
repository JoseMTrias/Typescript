interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //startTrail: () => string;  -----  or the following version
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: 'admin' | 'ta' | 'learner';
}

const joseT: Admin = {
  dbId: 23,
  githubToken: 'github',
  email: 'j@t.com',
  userId: 666,
  role: 'admin',
  startTrail: () => {
    return 'trail started';
  },
  getCoupon: (name: 'reduction', off: 10) => {
    return 10;
  },
};

joseT.email = 'jaja@jr.com';
// joseT.dbId = 333
