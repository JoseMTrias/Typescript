function detectType(val: number | string) {
  if (typeof val === 'string') {
    return val.toLocaleLowerCase();
  }
  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log('provide id');
    return;
  }
  id.toLocaleLowerCase();
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === 'object') {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === 'string') {
      console.log(strs);
    }
  }
}
