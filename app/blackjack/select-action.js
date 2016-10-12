import shouldSplit from './should-split';
import shouldHit from './should-hit';

export default function (card1, card2) {
  if (shouldSplit(card1, card2)) {
    return 'split';
  }

  if (shouldHit(card1, card2)) {
    return 'hit';
  }

  return 'stay';
}
