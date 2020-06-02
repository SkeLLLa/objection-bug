const { Foo, Bar } = require('./models');

(async () => {
  try {
    const p = Foo.query().withGraphJoined('bar').where({ barId: 1 }).debug();
    const r = await p;
    console.log(r);
  } catch (err) {
    console.error(err);
  }
})();
