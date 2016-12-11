/*jshint esversion: 6*/
export function selectBook (book) {
    return {
        type: 'BOOK_SELECTED',
        payload: book 
    };
}
