import { useState } from "react";

const GorevEkle = ({ gorevler, setGorevler }) => {

  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [showImage, setShowImage] = useState(true);


  const gonder = (e) => {
    e.preventDefault()

    setGorevler([...gorevler, {
      id: gorevler.length+1,
      text: text,
      day: day,
      bitti: false,
    }]);
  };

console.log(gorevler);

const handleClick = () => {
  setShowImage(!showImage)
{
  
}} 

  return (
    <div>
      <header className="header">
        <h1>TASK TRACKER</h1>
        <button className={showImage ? "btn2" : "btn"} onClick={handleClick}>{showImage ? "Show Add Task Bar" : "Close Add Task Bar"}</button>
      </header> 
      {!showImage && (
     <form onSubmit={gonder}>
        <div className="form-control">
          <label htmlFor="text">Task</label>
          <input
            id="text"
            type="text"
            name="text"
            placeholder="Add Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="day">Day & Time</label>
          <input
            id="day"
            type="date"
            name="day"
            placeholder="Add Task"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div>
          <button className="btn btn-submit" type="submit">
            SAVE TASK
          </button>
        </div>
      </form> 
      )}
    </div>
  );
};

export default GorevEkle;
