const Box = ({ value, num, makeTurn }) => {
  return (
    <div 
      className={value === 'X' ? 'boxX' : 'boxO'}
      onClick={() => makeTurn(num)} 
    >
      {value}
    </div>
  );
}

export default Box;