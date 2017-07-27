/**
 *        Invert values
 *
 *        Given a set of numbers, return the additive inverse of each.
 *        Each positive becomes negatives,
 *        and the negatives become positives.
 */



function invert(array) {
    return array.map(function(item){
        return item? -item : item;
    });
}
