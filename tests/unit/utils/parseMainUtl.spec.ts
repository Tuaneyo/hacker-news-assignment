import { parseMainUrl } from '@/utils/parseMainUrl';
import { expect } from 'chai';

describe('parseMainUrl', () => {
  it('should return null if no URL is provided', () => {
    const result = parseMainUrl(null);
    expect(result).to.equal(null);
  });

  it('should return a domain name', () => {
    const result = parseMainUrl('https://news.ycombinator.com/front');
    expect(result).to.equal('news.ycombinator.com');
  });

});