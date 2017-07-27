/*
 *      Friend or Foe?
 *
 *      make a program that filters a list of strings and returns a list with only your friends name in it.
 *
 *     If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!
 *     Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
 *
 */

function friend(friends){
    friends = friends || [];

    return friends.filter(function(item){
        return item && item.length == 4;
    })
}