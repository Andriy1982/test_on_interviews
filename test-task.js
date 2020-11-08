// Вам дан список элементов. Все элементы кроме одного уникальны. Единственный элемент появляется в списке дважды.
// Напишите функцию, которая вернет список элементов, которые находятся между неуникальными элементами.

// Примеры:
// [0, 1, 2, 3, 4, 5, 6, 1, 7, 8] => [2, 3, 4, 5, 6]
// ["None", "Hello", "Example", "hello", "None", "Extra"] => ["Hello", "Example", "hello"]
// [0, 0] => []
// [true, false, true] => [false]
// "example" => "xampl"

const getElementBetweenUnique = (arr) => {
    const notUniqueEl = arr.find((el, index, array) => {
        return array.indexOf(el) !== index
    })

    console.log(arr.indexOf(notUniqueEl));
    const result = arr.slice(arr.indexOf(notUniqueEl) + 1)
    console.log(result.slice(0, result.indexOf(notUniqueEl)));
    // let start;
    // let end;

    // for (let i = 0; i < arr.length; i += 1) {
    //     a
    // }

}

getElementBetweenUnique([0, 0] )