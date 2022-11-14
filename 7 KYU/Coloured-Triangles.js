// A coloured triangle is created from a row of colours, each of which is red, green or blue. Successive rows, each containing one fewer colour than the last, are generated by considering the two touching colours in the previous row. If these colours are identical, the same colour is used in the new row. If they are different, the missing colour is used in the new row. This is continued until the final row, with only a single colour, is generated.
// You will be given the first row of the triangle as a string and its your job to return the final colour which would appear in the bottom row as a string. In the case of the example above, you would the given RRGBRGBB you should return G.


function triangle(row) {
    let result = ''
    if (row.length == 1) {
        result = row
    }
    for (let i = 0; i < row.length - 1; i++) {
        if (row[i] == row[i + 1]) {
            result += row[i]
        } else {
            result += 'RGB'.replace(row[i], '').replace(row[i + 1], '')
        }
    } if (result.length > 1) {
        return triangle(result)
    } else {
        return result
    }
}