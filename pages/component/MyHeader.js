const MyHeader = ({ headText, leftChild, righttChild }) => {
  return (
    <header>
      <div className="Btn">
        <div className="head_btn_left">{leftChild}</div>      
        <div className="head_btn_right">{righttChild}</div>      
      </div>
      <div className="head_text">{headText}</div>
    </header>
  );
};

export default MyHeader;