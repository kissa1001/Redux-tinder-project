/*jshint esversion: 6*/
/* jshint -W138 */
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
        return action.payload;
    }
    return state;
}
