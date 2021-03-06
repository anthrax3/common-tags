import commaLists from './commaLists';
import { readFromFixture } from '../utils';

const val = 'amaze';

test('includes arrays as comma-separated list', async () => {
  const fruits = ['apple', 'banana', 'kiwi'];
  const expected = await readFromFixture(__dirname, 'commaLists');
  const actual = commaLists`
    Doge <3's these fruits: ${fruits}
    they are ${val}
  `;
  expect(actual).toBe(expected);
});
