function Dialog({onClose}) {
  return (
    <div className="dialog flex">
      <h3>Excellent, thanks for using the rating system</h3>
      <button onClick={onClose} className="btn">Close</button>
    </div>
  );
}

export default Dialog;