//Entender el problema
//la respuesta propuesta del robot A se considera  es errónea
//conocer los caminos que pueden recorrer los robots, reconocer que ambos pueden encontrarse
//el número de iteraciones está relacionado directamente al número de filas
//se le dará prioridad al robot A para recoger las semillas, por lo que se propone cambiar el valor a 0,
// así el robot B no podrá recolectar las mimas en dado caso de coincidir

// let matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 0, 1, 2],
//   [3, 4, 5, 6],
//   [7, 8, 9, 0],
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 0, 1, 2],
// ];

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [0, 1, 2],
];

// let matrix = [
//   [1, 2, 3, 4, 5, 6],
//   [7, 8, 9, 0, 1, 2],
// ];

// let matrix = [[1], [1], [1]];

var jMatrixA = 0;
var jMatrixB = 0;
var e = 0;
var carrotsA = 0;
var carrotsB = 0;

function cases() {
  while (e < matrix.length) {
    switch (e) {
      case 0:
        //A
        //B
        jMatrixB = matrix[e].length - 1;
        calculateC(e, jMatrixA, jMatrixB);
        e++;
        break;

      case 1:
        //A
        jMatrixA--;
        if (jMatrixA < 0) {
          jMatrixA = 0;
        }
        //B
        jMatrixB--;
        if (jMatrixB < 0) {
          jMatrixB = 0;
        }
        calculateC(e, jMatrixA, jMatrixB);
        e++;
        break;

      case 2:
        //A
        //B
        calculateC(e, jMatrixA, jMatrixB);
        e++;
        break;

      default:
        //A

        jMatrixA++;
        if (jMatrixA > matrix[0].length - 1) {
          jMatrixA = matrix[0].length - 1;
        }
        //B
        jMatrixB++;
        if (jMatrixB > matrix[0].length - 1) {
          jMatrixB = matrix[0].length - 1;
        }
        calculateC(e, jMatrixA, jMatrixB);
        e++;
        break;
    }
  }
  console.log("The number of carrots robot A will pick are: ", carrotsA);
  console.log("The number of carrots robot B will pick are: ", carrotsB);
}

function calculateC(i, j, k) {
  carrotsA = carrotsA + matrix[i][j];
  matrix[i][j] = 0;
  carrotsB = carrotsB + matrix[i][k];
}

cases();
