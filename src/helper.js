export const checkWinnerX = (arr) => {
  console.log(arr);
  if(arr[0] === 'X' &&
     arr[1] === 'X' &&
     arr[2] === 'X'){
       return true;
  }
  if(arr[3] === 'X' &&
     arr[4] === 'X' &&
     arr[5] === 'X'){
       return true;
  }
  if(arr[6] === 'X' &&
     arr[7] === 'X' &&
     arr[8] === 'X'){
       return true;
  }

  if(arr[0] === 'X' &&
     arr[3] === 'X' &&
     arr[6] === 'X'){
       return true;
  }
  if(arr[1] === 'X' &&
     arr[4] === 'X' &&
     arr[7] === 'X'){
       return true;
  }
  if(arr[2] === 'X' &&
     arr[5] === 'X' &&
     arr[8] === 'X'){
       return true;
  }

  if(arr[0] === 'X' &&
     arr[4] === 'X' &&
     arr[8] === 'X'){
       console.log('egari');
       return true;
  }
  if(arr[2] === 'X' &&
     arr[4] === 'X' &&
     arr[6] === 'X'){
       return true;
  }
}

export const chechWinnerO = (arr) => {
  if(arr[0] === 'O' &&
     arr[1] === 'O' &&
     arr[2] === 'O'){
       return true;
  }
  if(arr[3] === 'O' &&
     arr[4] === 'O' &&
     arr[5] === 'O'){
       return true;
  }
  if(arr[6] === 'O' &&
     arr[7] === 'O' &&
     arr[8] === 'O'){
       return true;
  }

  if(arr[0] === 'O' &&
     arr[3] === 'O' &&
     arr[6] === 'O'){
       return true;
  }
  if(arr[1] === 'O' &&
     arr[4] === 'O' &&
     arr[7] === 'O'){
       return true;
  }
  if(arr[2] === 'O' &&
     arr[5] === 'O' &&
     arr[8] === 'O'){
       return true;
  }

  if(arr[0] === 'O' &&
     arr[4] === 'O' &&
     arr[8] === 'O'){
       return true;
  }
  if(arr[2] === 'O' &&
     arr[4] === 'O' &&
     arr[6] === 'O'){
       return true;
  }
}