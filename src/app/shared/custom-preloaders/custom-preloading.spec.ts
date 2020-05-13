import { CustomPreloading } from './custom-preloading';

describe('Myclass', () => {
    it('should create an instance', () => {
        expect(new CustomPreloading()).toBeTruthy();
    });

    it('should implement a method preload', () => {
        expect(new CustomPreloading().preload).toBeDefined();
    })
});
