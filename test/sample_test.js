import './setup';
import say from '../src/sample';

describe('./src/sample', function() {
    it('says hello', function() {
        expect(say('scott')).to.equal('hello scott');
    });
});
