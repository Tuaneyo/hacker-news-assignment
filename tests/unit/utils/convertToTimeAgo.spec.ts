import { convertToTimesAgo } from '@/utils/convertToTimesAgo';
import { expect } from 'chai';

describe('convertToTimesAgo', () => {
  it('should return "Just now" for a recent timestamp', () => {
    const currentTime = Math.floor(Date.now() / 1000);
    const result = convertToTimesAgo(currentTime);

    expect(result).to.equal('Just now');
  });

  it('should return a formatted time for older timestamps', () => {
    const timestamp = Math.floor(Date.now() / 1000) - 3600; // One hour ago in seconds
    const result = convertToTimesAgo(timestamp);

    expect(result).to.equal('1 hour ago');
  });
});