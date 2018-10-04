var sudoku=[[0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0]];
sudoku[0][0] = Math.floor((Math.random() * 9) + 1);
sudoku[1][1] = Math.floor((Math.random() * 9) + 1);
sudoku[2][2] = Math.floor((Math.random() * 9) + 1);
sudoku[3][3] = Math.floor((Math.random() * 9) + 1);
sudoku[4][4] = Math.floor((Math.random() * 9) + 1);
sudoku[5][5] = Math.floor((Math.random() * 9) + 1);
sudoku[6][6] = Math.floor((Math.random() * 9) + 1);
sudoku[7][7] = Math.floor((Math.random() * 9) + 1);
sudoku[8][8] = Math.floor((Math.random() * 9) + 1);//set random numbers to pivots


var limit=[1,2,3,4,5,6,7,8,9,10];
function soduku(r,c,i){
for(r=0;r<9;r++){
	for(c=0;c<9;c++){
		if(sudoku[r][c]=0){
		for(var rr=0;rr<9;r++){//rr is a copy of row
		    for(var cc=0;cc<9;cc++){//cc is a copy of column
			    if((c!=cc||r!=rr)&&(sudoku[r][c]==sudoku[r][cc]||sudoku[r][c]==sudoku[rr][cc])){//cell_value is not itself and has the same value with the cell in the same column or row.
				    sudoku[r][c]=limit[i++];
				}
				if(sudoku[r][c]=10){
					sudoku[r][c]=0;
					if(c==0&&r!=c){
						sudoku[r-1][8]=sudoku[r-1][8]-1
					}
					else sudoku[r][c-1]=sudoku[r][c-1]-1;
				}
				}
			}
		}
		else c++;//skip the number typed by user
	} 
}
return 0;
}