interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //startTrail: () => string;  -----  or the following version
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

const joseT: User = {
  dbId: 23,
  email: 'j@t.com',
  userId: 666,
  startTrail: () => {
    return 'trail started';
  },
  getCoupon: (name: 'reduction', off: 10) => {
    return 10 ;
  },
};

joseT.email = 'jaja@jr.com';
// joseT.dbId = 333
