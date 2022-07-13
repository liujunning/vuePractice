import {add} from '../index';

it('init', ()=> {
    expect(add(2,3)).toBe(5)
    expect(add(1,1)).toBe(2)
})

test('joke', ()=> {
    expect(add(3,4)).toEqual(7)
})

test('object val', ()=> {
    let data = {one: 1}
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2})
})